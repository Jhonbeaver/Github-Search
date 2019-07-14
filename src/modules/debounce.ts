let timeout: number;

/**
 * Функция debounce позволяющая выполнять указанную функцию один раз в n секунд
 * @param  {function} callback
 * @param  {number} wait
 */
export default function (callback: () => void, wait: number) {
  return function (this: any, ...args: any) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}
