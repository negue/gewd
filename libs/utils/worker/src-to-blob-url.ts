export function srcToBlobUrl(name, workerCode, commentLine = null) {
  const blob = new Blob([workerCode, '\n', commentLine
    ? commentLine
    : `//# sourceURL=JS://CustomWorker/generated-${name}`]);
  return URL.createObjectURL(blob);
}
