export const getGUID = (() => {
  let counter = 1;
  return () => counter++;
})();
