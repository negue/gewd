export function dataToBlobUrl(...blobContents: BlobPart[]) {
  const blob = new Blob(blobContents);

  return URL.createObjectURL(blob);
}

export function srcToBlobUrl(name, workerCode, commentLine = null) {
  return dataToBlobUrl(workerCode, '\n', commentLine
    ? commentLine
    : `//# sourceURL=JS://CustomWorker/generated-${name}`
  );
}
