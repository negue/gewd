export function linkRendererTargetBlank (href, title, text ): string  {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
}

// original code from https://stackoverflow.com/a/46838553
// changed to use href/text separately

export function get_favicon (href: string, text: string): string  {
  // return replacement text here...
  return `<img src="https://www.google.com/s2/favicons?domain=${href}">${text}`;
}

export function linkRendererWithFavIcon (href: string, title: string | null, text: string): string  {
  let prot : string;
  try {
    prot = decodeURIComponent(unescape(href))
      .replace(/[^\w:]/g, '')
      .toLowerCase();
  } catch (e) {
    return '';
  }
  if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
    return '';
  }

  const hasImage = text.includes('<img');
  const withFavIcon = !href.startsWith('./');

  const newLink = [];
  newLink.push(`<a href="${href}"`);
  if (hasImage) {
    newLink.push(' class="has-image"');
  }

  if (!hasImage && withFavIcon){
    console.info(newLink, href);
    newLink.push(' class="with-favicon"');
  }

  if (title) {
    newLink.push(` title="${title}"`);
  }
  newLink.push('>');
  if (hasImage || !withFavIcon) {
    newLink.push(text)
  } else {
    newLink.push(get_favicon(href, text));
  }
  newLink.push('</a>');

  return newLink.join('');
}
