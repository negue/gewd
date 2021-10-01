// Todo use @gewd/utils for that?

export function updateDynamicStyle(
  document: Document,
  styleId: string,
  customCss: string
) {
  const style = getStyleElement(document, styleId);

  replaceCss(document, style, customCss);
}

export function getStyleElement(
  document: Document,
  styleId: string,
): HTMLStyleElement {
  const head = document.getElementsByTagName('head')[0];
  const allStyles = head.getElementsByTagName('style');
  let style: HTMLStyleElement = null;

  for (let styleIndex = 0; styleIndex < allStyles.length; styleIndex++) {
    const styleInHeader = allStyles.item(styleIndex);

    if (styleInHeader.id === styleId) {
      style = styleInHeader;
      break;
    }
  }

  if (style === null) {
    style = document.createElement('style');
    style.id = styleId;
    style.type = 'text/css';
    head.appendChild(style);
  }

  return style;
}

export function replaceCss(
  document: Document,
  styleTag: HTMLStyleElement,
  customCss: string
) {
  if (styleTag.childNodes.length > 0) {
    styleTag.childNodes.forEach(child => {
      styleTag.removeChild(child);
    })
  }

  styleTag.appendChild(document.createTextNode(customCss));
}
