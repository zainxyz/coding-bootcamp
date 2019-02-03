/**
 * Memoize a function and cache its results
 *
 * @method memoize
 * @param  {Function} fn The funtion to memoize
 * @return {Function}    A curried function
 */
function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        // const result = fn.apply(this, args);
        const result = fn(...args);
        cache[args] = result;

        return result;
    };
}

export default memoize;
