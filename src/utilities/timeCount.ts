export function timeCounter(func: Function, array: any[]): number {
  const startTime = new Date().getTime();
  const result = func(array);
  const endTime = new Date().getTime();
  const totalTime = endTime - startTime;
  console.log(result);
  return totalTime;
};