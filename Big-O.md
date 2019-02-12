# big-O

**Runtime** how long does it take to run a certain problem through a function or a task.

How quickly our runtime grows.

> When we grow bigger and bigger with our input, how much does the algorithm or function slow down.

This is what we call **Algorithmic Efficiency**.

## `O(n)` Linear Time

Executing the algorithm once for each available input.

## `O(1)` Constant

Executing the algorithm **exactly once**, no matter how many inputs.

```javascript
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
```

## `O(n^2)` Quadratic Time

Every time the number of elements increases, the number of operations increases significantly.

## `O(log(n))` Logarithmic

Usually searching algorithms have `log(n)` if they are **sorted**, (Binary search).

## `O(n log(n))` Log Linear

Usually all sorting operations.

## `O(2^n)` Exponential

Recursive algorithm that solves a problem for size of `n`.

## `O(n!)` Factorial (oh no!)

You are adding a loop for every element.

--------------------------------------------------------------------------------

> Iterating through a half a collection is still `O(n)`

> Two separate collections is `O(a * b)`

**Big O(3 + 4n)** > O(n)

# Simplifying `Big O`

1. **Always** Worst Case
2. Remove Constants
3. Different terms for inputs (different inputs should have different variables)
4. Drop Non Dominants

## Worst Case

When calculating `Big O` we always think about the **worst case**, as `Big O` only cares about the **worst case**.

## Remove Constants

Drop the constants when calculating `Big O`.

## Different terms for inputs

If there are multiple inputs, take them into account.

In the example below, we have two inputs `boxes` and `boxes2`. For this we can't just say that this will be `O(2n)`, then drop the constants to `O(n)`. No.

Since there are two inputs, we have to say this will be `O(a + b)` or `O(n + m)`. The two loops will run once for the length of each of the inputs.

```javascript
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box1 => console.log(box1));

    boxes2.forEach(box2 => console.log(box2));
}
```

When you have nested loops inside a function, instead of `+` addition, use `*` multiplication.

Thus, the example below becomes `O(n * n)` or `O(n^2)`.

```javascript
function logAllPairsOfArray(arr) {
    for (let i of arr) {
        for (let j of arr) {
            console.log([i, j]);
        }
    }
}
```

> Any indentation that happens one after another, you **add**, and any indentation that is nested, you **multiply**.

## Drop Non Dominant (drop non dominant terms | only keep the dominant term)

We want to drop the non dominant terms, since they don't add any value when calculating `Big O`.

In the example below, even though the `Big O` is `O(n + n^2)`, we will say that the `Big O` is actually `O(n^2)`, since as the size of `numbers` increases, `n^2` increases drastically, and adding an `n` to it is insignificant.

```javascript
function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers :');
    numbers.forEach(num => console.log(num));

    console.log('and these are their sums :');
    numbers.forEach(first => {
        numbers.forEach(second => {
            console.log(first + second);
        });
    });
}
```

## What can cause time in a function?

1. Operations `+ - * /`
2. Comparisons `< > ==`
3. Looping `for while`
4. Outside `fn` calls `someFunctionDeclaredOutside()`

## What causes Space complexity?

1. Variables
2. Data Structures
3. Function Call
4. Allocations

## Arrays

- Lookup `O(1)`
- Push `O(1)`
- Insert `O(n)`
- Delete `O(n)`
