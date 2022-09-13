let timeoutId = null;
const debounce = (fn, delay) => {
    return (value) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(value);
        }, delay);
    };
};

export default debounce;
