(function () {

	if (typeof self === 'undefined' || typeof Prism === 'undefined') {
		return;
	}

	var PAIRS = [
	  [
	    '[', ']'
    ],
    [
      '{', '}'
    ],
    [
      '(', ')'
    ],
    /*[
      '<', '>'
    ]*/
  ]

	var bracketsToWorkWith = [];

	for (var p of PAIRS) {
	  bracketsToWorkWith.push(...p);
  }

  var currentDepth = {
    '[': 0,
    '{': 0,
    '(': 0,
    // '<': 0
  }

	Prism.hooks.add('wrap', function (env) {

		if (env.type === 'punctuation' && bracketsToWorkWith.includes(env.content)) {

		  for (var p of PAIRS) {
		    var startTag = p[0];
		    var endTag = p[1];

		    if (env.content === startTag) {
		      var depthOfType = ++currentDepth[startTag];

		      var depthClass = `depth-${depthOfType}`;
		      env.classes.push(depthClass);
		      break;
        }

		    if (env.content === endTag) {
		      var depthOfType = currentDepth[startTag];

		      var depthClass = `depth-${depthOfType}`;

		      env.classes.push(depthClass);

		      currentDepth[startTag]--;
		      break;
        }
      }
		}
	});
}());
