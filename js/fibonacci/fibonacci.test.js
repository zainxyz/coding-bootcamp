import fib from './fibonacci';

describe('fibonacci()', () => {
    it('Fib function is defined', () => {
        expect(typeof fib).toEqual('function');
    });

    it('calculates correct fib value for 1', () => {
        expect(fib(1)).toEqual(1);
    });

    it('calculates correct fib value for 2', () => {
        expect(fib(2)).toEqual(1);
    });

    it('calculates correct fib value for 3', () => {
        expect(fib(3)).toEqual(2);
    });

    it('calculates correct fib value for 4', () => {
        expect(fib(4)).toEqual(3);
    });

    it('calculates correct fib value for 15', () => {
        expect(fib(15)).toEqual(610);
    });

    it('calculates correct fib value for 20', () => {
        expect(fib(20)).toEqual(6765);
    });

    it('calculates correct fib value for 25', () => {
        expect(fib(25)).toEqual(75025);
    });

    it('calculates correct fib value for 30', () => {
        expect(fib(30)).toEqual(832040);
    });

    it('calculates correct fib value for 35', () => {
        expect(fib(35)).toEqual(9227465);
    });

    it('calculates correct fib value for 40', () => {
        expect(fib(40)).toEqual(102334155);
    });

    it('calculates correct fib value for 45', () => {
        expect(fib(45)).toEqual(1134903170);
    });
});
