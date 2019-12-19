fetch('https://api.github.com/emojis')
  .then(r => r.json())
  .then(val => Object.keys(val).map(key => ({ key, value: val[key] })))
  .then(map => {
    var emojiMap = {};
    map.forEach( e => {
      try {
        emojiMap[e.key] = e.value.match(/unicode\/(.*).png/)[1];
      } catch (er) {
        console.error(er, e);
      }
    } );

    console.info(JSON.stringify(emojiMap));

    return emojiMap;
  })
  .then ( map => window.emojiMap = map)
;
