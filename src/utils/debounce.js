let timeoutId = "" || 0 || undefined;
const debounce = (fn: unknown, delay: unknown) => {
    return (value: string) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(value);
        }, delay);
    };
};

export default debounce;
