module.exports = function(md, options) {
  //List all rules:
  //console.log(md.core.ruler.getRules(''))
  //console.log(md.block.ruler.getRules(''))
  //console.log(md.inline.ruler.getRules(''))
  //it is possible to define where to place a new rule:
  //core|block|inline, before|after|push
  //md.block.ruler.before('paragraph', 'my_rule', function replace(state) {});
  //md.inline.ruler.after('text', 'my_rule', function replace(state) {});

  const DEFAULT_REGEX_FLAGS = "gm"; //[g]lobal, [m]ultiline

  if (options && options.config) {
    const config = options.config;
    const before_replacements = config.before_replacements ?? [];
    const after_replacements = config.after_replacements ?? [];
    const commands = config.commands ?? [];

    md.core.ruler.before('normalize', 'codeability-before-rule', function (state) {
      //this are the regex/replacements applied before any markdown-it rules
      //i.e. modifying the src string directly
      var src = state.src;
      before_replacements.forEach(item => {
        src = replace(src, item.regex, item.replacement, item.flags);
      });
      state.src = src;    
    });

    md.core.ruler.push('codeability-after-rule', function (state) {
      //go through each token
			state.tokens.forEach(function (blockToken) {
				//console.log(blockToken)
        //only process inline blocktokens and blocktokens with children
        if (blockToken.type === 'inline' && blockToken.children) {
					blockToken.children.forEach(function (token) {
            //children.content
            if (token.content) {
              var found = false;
              after_replacements.forEach(item => {
                if (test(token.content, item.regex, item.flags)) {
                  token.content = replace(token.content, item.regex, item.replacement, item.flags);
                  found = true;
                }
              });
              commands.forEach(item => {
                const regex = item.regex ?? "";
                const flags = item.flags ?? "g";
                const error = item.error ?? "<span style=\"background-color: violet;\">Command not found: {arg1}</span>";
                const replacements = item.replacements ?? {};

                var str = token.content;
                var regExp = new RegExp(regex, flags);
                var match = regExp.exec(str);
                var hasCommand = false;
                var isValidCommand = undefined;
                while (match != null) {
                  hasCommand = true;
                  isValidCommand = replacements[match[1]] !== undefined;
                  var rm = isValidCommand ? replacements[match[1]] : error;
                  rm = rm.replace(/\{arg1\}/g, match[1]);
                  rm = rm.replace(/\{arg2\}/g, match[2]);
                  rm = rm.replace(/\{arg3\}/g, match[3]);
                  rm = rm.replace(/\{arg4\}/g, match[4]);
                  rm = rm.replace(/\{arg5\}/g, match[5]);
                  str = str.replace(match[0], rm);
                  match = regExp.exec(str);
                }
                if (hasCommand) {
                  token.content = str;
                  found = true;
                }
              });
              if (found) {
                token.type = 'html_inline';
              }
            }
					});
				}
			});
    });
  }

  function replace(str, regex, replacement, flags = DEFAULT_REGEX_FLAGS) {
    return str.replace(new RegExp(regex, flags), replacement);
  }

  function test(str, regex, flags = DEFAULT_REGEX_FLAGS) {
    const regExp = new RegExp(regex, flags);
    return regExp.test(str);
  }
};
