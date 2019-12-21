// thanks to https://stackoverflow.com/a/10615607
function fixedFromCharCode (codeStr: string) {
  let codePt = parseInt(codeStr, 16);
  if (codePt > 0xFFFF) {
    codePt -= 0x10000;
    // tslint:disable-next-line:no-bitwise
    return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
  }
  else {
    return String.fromCharCode(codePt);
  }
}

export function colonToUnicode(unicodeStringValue: string) {
  const colonLength = unicodeStringValue.length;

  switch(colonLength) {
    case 4:
    case 5: {
      return fixedFromCharCode(unicodeStringValue);
    }
    default: {
      // split the parts
      const split = unicodeStringValue.split('-');

      // merged emoji's need &zwj;
      return split.map(fixedFromCharCode).join('&zwj;');
    }
  }
}
