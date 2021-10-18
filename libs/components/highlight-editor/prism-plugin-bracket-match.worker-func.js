(function () {

	if (typeof self === 'undefined' || typeof Prism === 'undefined') {
		return;
	}

	const PAIRS = [
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

	const bracketsToWorkWith = [];

	for (const p of PAIRS) {
	  bracketsToWorkWith.push(...p);
  	}

  const currentDepth = {
    '[': 0,
    '{': 0,
    '(': 0,
    // '<': 0
  }

	Prism.hooks.add('wrap', function (env) {
		if (env.type === 'punctuation' && bracketsToWorkWith.includes(env.content)) {
			let depthOfType, depthClass;
			for (const p of PAIRS) {
				const startTag = p[0];
				const endTag = p[1];

				if (env.content === startTag) {
					depthOfType = ++currentDepth[startTag];

					depthClass = `depth-${depthOfType}`;
					env.classes.push(depthClass);
					break;
				}

				if (env.content === endTag) {
					depthOfType = currentDepth[startTag];

					depthClass = `depth-${depthOfType}`;

					env.classes.push(depthClass);

					currentDepth[startTag]--;
					break;
				}
			}	
		}
	});
}());
