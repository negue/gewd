export function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const uuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export function downloadFile (filename: string, linkToClick: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = linkToClick;
  link.click();
}

export function downloadData (filename: string, mimeType: string, data: string): void {
  downloadFile(filename, `data:${mimeType};base64,${btoa(data)};`);
}

export function downloadImage (filename: string,
                               canvasElement: HTMLCanvasElement): void {
  downloadFile(filename, canvasElement.toDataURL());
}

export function simpleDateString (milliseconds = false): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const ml = now.getMilliseconds();

  // YYYY_MM_DD_HH_MM_SS
  const newDateString = `${year}_${month}_${day}__${hour}_${minute}_${second}${milliseconds ? '_' + ml : ''}`;

  return newDateString;
}

export function arraymove (
  arr: unknown[],
  fromIndex: number,
  toIndex: number
): void {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

// https://stackoverflow.com/a/424445
// https://stackoverflow.com/a/72732727

export function RNG (seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function() {
    return (s = s * a % m) / m;
  };
}

export function upgradeMathRandom () {
  Math.random = RNG(Date.now());
}

export function randomElement<T> (items: T[]): T {
  const chosenRandomNumber = Math.random() * items.length;
  const flooredNumber = Math.floor(chosenRandomNumber);

  const chosenItem = items[flooredNumber];

  return chosenItem;
}
