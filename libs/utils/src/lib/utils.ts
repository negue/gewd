export function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const uuid = (): string  => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,  (c) => {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function downloadFile(filename: string, linkToClick: string): void  {
  const link = document.createElement('a');
  link.download = filename;
  link.href = linkToClick;
  link.click();
}

export function downloadData(filename: string, mimeType: string, data: string): void  {
  downloadFile(filename, `data:${mimeType};base64,${btoa(data)};`);
}

export function downloadImage(filename: string,
                              canvasElement: HTMLCanvasElement): void {
  downloadFile(filename, canvasElement.toDataURL());
}
