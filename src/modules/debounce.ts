let timeout: any;

/**
 * Функция debounce позволяющая выполнять указанную функцию один раз в n секунд
 * @param  {function} callback
 * @param  {number} wait
 * @param  {boolean} immediate
 */
export default function (callback: () => void, wait: number = 1000, immediate: boolean = false) {
  return function debounce(this: any, ...args: any) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    }, wait);
    if (immediate && !timeout) callback.apply(context, args);
  };
}
