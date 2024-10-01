export const toHumanDate = (date: number | string) => {
  const newDate =
    typeof date === "number" ? new Date(date * 1000) : new Date(date);

  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export const debounceFunction = <F extends (...args: any[]) => any>(
  functionToDebounce: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: number | undefined;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      functionToDebounce(...args);
    }, delay);
  };
};
