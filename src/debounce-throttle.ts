export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  requiredDelay: number,
) {
  let lastRun = 0;

  return (...args: Args) => {
    const thisRun = new Date().getTime();
    const interval = thisRun - lastRun;

    if (interval > requiredDelay) {
      fn(...args);
      lastRun = thisRun;
    }
  };
}
