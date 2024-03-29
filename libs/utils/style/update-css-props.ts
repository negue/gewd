export function updateCssProps (
  element: HTMLElement,
  cssProps: any
): void  {
  const { style } = element;
  for (const [k, v] of Object.entries(cssProps)) {
    style.setProperty(k, v.toString(), 'important');
  }
}
