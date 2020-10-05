export interface HandleTabResponse {
  textChanged: boolean;
  newValue: string;
  newSelectionStart: number;
  newSelectionEnd: number;
}

export function handleTab (event: KeyboardEvent,
                           currentValue: string,
                           startSelection: number,
                           endSelection: number,
                           useTabs = false,
                           spaceLength = 2)
  : HandleTabResponse {
    const result: HandleTabResponse = {
      textChanged: false,
      newValue: '',
      newSelectionStart: 0,
      newSelectionEnd: 0
    };

    if (event.key !== "Tab") {
      return result;
    }

    const backwards = event.shiftKey;

    const valueToWork = useTabs
      ? '\t'
      : ''.padEnd(spaceLength, ' ');

    const textValueUntilStart = currentValue.substr(0, startSelection);
    const textValueFromStart = currentValue.substr(endSelection);


    if (backwards) {
      if (textValueUntilStart.endsWith(valueToWork)) {
        result.newValue = textValueUntilStart.substr(0, startSelection - valueToWork.length) + textValueFromStart;
        result.newSelectionStart = result.newSelectionEnd = startSelection - valueToWork.length;

        result.textChanged = true;
      }
    } else {
      result.newValue = textValueUntilStart + valueToWork + textValueFromStart;
      result.newSelectionStart = result.newSelectionEnd = startSelection + valueToWork.length;

      result.textChanged = true;
    }

    event.preventDefault();

    return result;
}
