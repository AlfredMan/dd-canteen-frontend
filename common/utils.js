export const shuffleArray = originalArray => {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const lazy = (commit, task, optimistic, enabled) => {
  // By default, do lazy operations only in client
  if (enabled === undefined) {
    enabled = process.client;
  }

  // Non lazy mode
  if (!enabled) {
    return task().then(commit);
  }

  // Do real task in background
  Promise.resolve(task(optimistic))
    .then(commit)
    .catch(console.error); // eslint-disable-line no-console

  // Commit optimistic value and resolve
  return Promise.resolve(commit(optimistic));
};
