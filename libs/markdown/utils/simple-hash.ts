export function simpleHash (str: string): string {
  let hash = 0, i, chr;
  if (!str || str.length === 0) return '';
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    // tslint:disable-next-line:no-bitwise
    hash = ((hash << 5) - hash) + chr;

    // tslint:disable-next-line:no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}
