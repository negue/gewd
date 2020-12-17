export function linkRendererTargetBlank (href, title, text ) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
}

// original code from https://stackoverflow.com/a/46838553
// changed to use href/text separately

export function get_favicon (href, text) {
  // return replacement text here...
  var out = '<img src="https://www.google.com/s2/favicons?domain='
  out += href + '">' + text + '</a>'
  return out
}

export function linkRendererWithFavIcon (href, title, text) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return '';
    }

  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + get_favicon(href, text) + '</a>';
  return out;
}
