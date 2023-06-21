const json = {
  "regex_replacements" : {
    "^%.*$" : "\n",
    "^ %" : "%",
    "°([^\\°]+)°" : "`$1`"
  },
  "smallcaps": ["matlab", "simulink", "maple", "mathematica", "fortran", "clang", "cpp", "python", "netscape", "mozilla", "acroread", "emacs", "windows", "linux", "LaTex"],
  "smallcaps_replacement": "<span style=\"font-variant: small-caps; font-size:120%;\">{arg1}</span>",
  "command_error": "<span style=\"background-color: red;\">Command not found: {arg1}</span>",
  "commands" : {
    "sponsor" : "<b>Die Erstellung dieses Kurses wurde von MathWorks gesponsert</b></br>",
    "sponsorbild_reserve" : "<a href=\"https://www.mathworks.de/\" target=\"_blank\" border=\"0\"><img src=\"/static/MatlabPictures/bg_header_mwlogo_notag.jpg\" border=\"0\"></a> </br><b>Die Erstellung dieses Kurses wurde von MathWorks gesponsert</b></br>",
    "sponsorbild" : "<b>Die Erstellung dieses Kurses wurde von MathWorks gesponsert</b></br><a href=\"https://www.mathworks.de/\" target=\"_blank\" border=\"0\"><img src=\"/static/MatlabPictures/bg_header_mwlogo_notag.jpg\" border=\"0\"></a>",
    "hw" : "<u>Hinweis:</u></br>",
    "inputproblem" : "<u>Problem mit input:</u> Wenn sie nicht direkt auf unseren Computern eingeloggt sind, funktioniert der Matlab-Befehl input nur im Test und nicht in der Konsole. Sollte Matlab nicht mehr funktionieren, gibt es rechts im Header der Console Icons die Matlab stoppen, starten oder das Programm unterbrechen. Zum eigenen Probieren kommentieren sie die Zeilen mit input aus und weisen einfach Werte zu. Für das Testen oder Abgeben müssen sie das dann wieder ändern. Direkt bei uns funktioniert alles wie es soll.</br>",
    "ein" : "<u>Einführung:</u></br>",
    "err" : "<u>Fehlermeldungen:</u></br>",
    "warn" : "<u>Warnungen:</u></br>",
    "default" : "<u>Defaultwerte:</u></br>",
    "graph" : "<u>Graphische Ausgabe:</u></br>",
    "zus" : "<u>Zusatz:</u></br>",
    "ab" : "<u>Abgabe:</u></br>",
    "geg" : "<u>Gegeben:</u> ",
    "ges" : "<u>Gesucht:</u> ",
    "bsp" : "<u>Beispiel:</u></br>",
    "sc" : "<span style=\"font-variant: small-caps; font-size:120%;\">{arg2}</span>",
    "bspneu" : "<span style=\"color:red;\">Dies ist ein neues Beispiel, das unter Umständen unentdeckte Probleme macht. Falls Sie einen solchen Verdacht haben, wenden Sie sich bitte an einen Betreuer.</span>",
    "textit" : "<i>{arg2}</i>",
    "emph" : "<i>{arg2}</i>",
    "textbf" : "<span style=\"font-weight:bold;\">{arg2}</span>",
    "redtextbf" : "<span style=\"font-weight:bold; color:red\">{arg2}</span>",
    "tt" : "<code>{arg2}</code>",
    "red" : "<span style=\"color: red;\">{arg2}</span>",
    "green" : "<span style=\"color: green;\">{arg2}</span>",
    "blue" : "<span style=\"color: blue;\">{arg2}</span>",
    "black" : "<span style=\"color: black;\">{arg2}</span>",
    "wikilink" : "<a href=\"http://itp.tugraz.at/wiki/index.php\" target=\"_blank\">Wiki</a>",
    "mltutorhint" : "<a href=\"http://itp.tugraz.at/wiki/index.php/MLTutor_-_Hints#{arg2}\" target=\"_blank\">{arg3}</a>",
    "matrefe" : "<a href=\"http://www.mathworks.com/help/matlab/ref/{arg2}.html\" target=\"_blank\">{arg2}</a>",
    "matref" : "<a href=\"http://www.mathworks.com/help/matlab/ref/{arg3}.html\" target=\"_blank\">{arg2}</a>",
    "MatlabLearning" : "<a href=\"http://www.mathworks.com/help/matlab/learn_matlab/\" target=\"_blank\">Learning Matlab</a>",
    "MatlabReference" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Reference</a>",
    "MatlabMathematics" : "<a href=\"http://www.mathworks.com/help/matlab/\" target=\"_blank\">Mathematics</a>",
    "MatlabCreatingPlots" : "<a href=\"http://www.mathworks.com/help/matlab/creating_plots/\" target=\"_blank\">Creating Plots</a>",
    "MatlabProgramming" : "<a href=\"http://www.mathworks.com/help/matlab/matlab_prog/\" target=\"_blank\">Matlab Programming</a>",
    "MatlabDataAnalysis" : "<a href=\"http://www.mathworks.com/help/matlab/data_analysis/\" target=\"_blank\">Data Analysis</a>",
    "MatlabEnvironment" : "<a href=\"http://www.mathworks.com/help/matlab/matlab_env/\" target=\"_blank\">Matlab Environment</a>",
    "MatlabVisualize" : "<a href=\"http://www.mathworks.com/help/matlab/visualize/\" target=\"_blank\">Visualize</a>",
    "MatlabCreatingGUIs" : "<a href=\"http://www.mathworks.com/help/matlab/creating_guis/\" target=\"_blank\">Creating GUIs</a>",
    "MatlabExternalInterfacesReference" : "<a href=\"http://www.mathworks.com/help/matlab/apiref/\" target=\"_blank\">External Interfaces Reference</a>",
    "MatlabExternalInterfaces" : "<a href=\"http://www.mathworks.com/help/matlab/matlab_external/\" target=\"_blank\">External Interfaces</a>",
    "MatlabReferenceFunctionsCategoricalList" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Functions Categorial List</a>",
    "MatlabReferenceMathematics" : "<a href=\"http://www.mathworks.com/help/matlab/\" target=\"_blank\">Mathematics</a>",
    "MatlabReferenceMathematicsArraysAndMatrices" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Arrays and Matrices</a>",
    "MatlabReferenceMathematicsLinearAlgebra" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Linear Algebra</a>",
    "MatlabReferenceMathematicsElementaryMath" : "<a href=\"http://www.mathworks.com/help/matlab/elementary-math/\" target=\"_blank\">Elementary Math</a>",
    "MatlabReferenceMathematicsPolynomials" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Polynomials</a>",
    "MatlabReferenceMathematicsInterporlationAndComputationalGeometry" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Interpolation and Computational Geometry</a>",
    "MatlabReferenceMathematicsCoordinateSystemConversion" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Coordinate System Conversion</a>",
    "MatlabReferenceMathematicsNonlinearNumericalMethods" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Nonlinear Numerical Methods</a>",
    "MatlabReferenceMathematicsSpecializedMath" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Specialized Math</a>",
    "MatlabReferenceMathematicsSparseMatrices" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Sparse Matrices</a>",
    "MatlabReferenceMathematicsMathConstants" : "<a href=\"http://www.mathworks.com/help/matlab/ref/\" target=\"_blank\">Mathematical Constants</a>",
    "MatlabCharactersAndStrings" : "<a href=\"http://www.mathworks.com/help/matlab/characters-and-strings/\" target=\"_blank\">Elementary Math</a>",
    "matlabpublish" : "<a href=\"/dynamic_documents/MatlabPublish/{arg2}.html\" target=\"_blank\">{arg3}</a>",
    "matlabbook" : "<a href=\"/dynamic_documents/MatlabBooks/{arg2}.pdf\" target=\"_blank\">{arg3}</a>",
    "praesentationen" : "<a href=\"/dynamic_documents/Praesentationen/{arg2}.pdf\" target=\"_blank\">{arg3}</a>",
    "matlabtest" : "<a href=\"/dynamic_documents/MatlabTest/{arg2}.html\" target=\"_blank\">{arg3}</a>",
    "matlabtestsolution" : "<a href=\"/dynamic_documents/MatlabTestSolution/{arg2}.html\" target=\"_blank\">{arg3}</a>",
    "anleitung" : "<a href=\"/dynamic_documents/MatlabTutorAnleitung/{arg2}.pdf\" target=\"_blank\">{arg3}</a>",
    "description" : "<a href=\"/dynamic_documents/MatlabTutorDescription/{arg2}.html\" target=\"_blank\">{arg3}</a>",
    "appsoftkapitel" : "<a href=\"/dynamic_documents/Skriptum/kernbich.skriptum.kapitel-{arg2}.de.pdf\" target=\"_blank\">Skriptum Kapitel {arg2}</a>"
  }
}

for (let i=0; i<json["smallcaps"].length; i++) {
	json["commands"][json["smallcaps"][i]] = json["smallcaps_replacement"];
}

console.log(json);

var xxx = true;
module.exports = function(md, options) {
	if (options) {
		xxx = !!options.xxx;
	}

	md.core.ruler.after(
		'inline',
		'codeability-ctutor',
		function(state) {
			console.log(xxx);
			state.tokens.forEach(function (blockToken) {
				console.log("blockToken")
				console.log(blockToken)
				if (blockToken.type === 'inline' && blockToken.children) {
					blockToken.children.forEach(function (token) {
						replaceCommands(token);
					});
				}
			})
		}
	);
};

function replaceCommands(token) {
	if (token.content) {
		const x = process(token.content);
		console.log("token.content")
		console.log(token.content)
		console.log(token)
		token.content = x.processedStr;
		if (x.hasCommand) {
			token.type = 'html_inline'
		}
	}
}

function process(str) {
	let keys = Object.keys(json["regex_replacements"]);
	let vals = Object.values(json["regex_replacements"]);
	for (let i=0; i<keys.length; i++) {
		str = str.replace(new RegExp(keys[i], "gm"), vals[i]);
	}
	let regex = /\\([A-Za-z0-9]{2,})(?:\{([^}]+)\}){0,1}(?:\{([^}]+)\}){0,1}/g;
	let match = regex.exec(str);
	var hasCommand = false;
	var isValidCommand = undefined;
	while (match != null) {
		hasCommand = true;
		isValidCommand = json["commands"][match[1]] !== undefined;
		let rm = isValidCommand ? json["commands"][match[1]] : json["command_error"];
		rm = rm.replace(/\{arg1\}/g, match[1]);
		rm = rm.replace(/\{arg2\}/g, match[2]);
		rm = rm.replace(/\{arg3\}/g, match[3]);
		rm = rm.replace(/\{arg4\}/g, match[4]);
		rm = rm.replace(/\{arg5\}/g, match[5]);
		str = str.replace(match[0], rm);
		match = regex.exec(str);
	}

	const ret = {
		"hasCommand": hasCommand,
		"isValidCommand": isValidCommand,
		"processedStr": str,
	}
	return ret;
}
