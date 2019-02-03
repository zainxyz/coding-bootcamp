# Coding Bootcamp

Let's go to the Coding Bootcamp together!!!

## List of Exercises

1. [Anagrams](./anagrams/anagrams.js) - One string is an anagram of another if it uses the same characters in the same quantity.
2. [Capitalize](./capitalize/capitalize.js) - Capitalize the first letter of each word in the string.
3. [Chunk](./chunk/chunk.js) - Given an Array and a **chunk** size, divide the Array into many sub-Arrays where each sub-Array is of length **chunk** size.
4. [Fibonacci](./fibonacci/fibonacci.js) - Print out the n-th entry in the **Fibonacci** series. The **Fibonacci** series is an ordering of numbers where each number is the sum of the preceeding two.
5. [Fizz-Buzz](./fizz-buzz/fizz-buzz.js) - Console.log numbers from 1 to n; but, for multiples of 3 (three) print **fizz**, for multiples of 5 (five) print **buzz**, and for multiples of both 3 (three) and 5 (five) print **fizzbuzz** instead of the number.
6. [Matrix](./matrix/matrix.js) - Write a function that accepts an integer `n` and returns an `n x n` spiral matrix.
7. [Max Chars](./max-char/max-char.js) - Given a string, return the character that is most commonly used in the string. / What is the most common character in the string?
8. [Memoize](./memoize/memoize.js) - Memoize a function, **cache** its results, and return result from **cache** if present.
9. [Palindrome](./palindrome/palindrome.js) - Palindromes are strings that form the same word if it they are reversed.
10. [Pyramid](./pyramid/pyramid.js) - Write a function that accepts a positive number `n`, then Console.log a **pyramid** shape with `n` levels using the `#` (hash) character. Make sure the **pyramid** has spaces on both the left and right hand sides.
11. [Queue](./queue/queue.js) - Create a Queue data-structure, where items are in the **First In First Out** order (FIFO).
12. [Queue from Stack](./queue-from-stack/queue-from-stack.js) - Implement a Queue data-structure using two Stacks.
13. [Repeated Chars](./repeated-chars/repeated-chars.js) - Does the given string have any repeated characters in it?
14. [Reverse Int](./reverse-int/reverse-int.js) - Given an integer, return an integer that is the reverse ordering of the numbers.
15. [Reverse String](./reverse-string/reverse-string.js) - Given a string, return a new string with the reversed ordering of the characters.
16. [Stack](./stack/stack.js) - Create a Stack data-structure, where items are in the **First In Last Out** order (FILO).
17. [Steps](./steps/steps.js) - Write a function that accepts a positive number `n`, then Console.log a **step** shape with `n` levels using the `#` (hash) character. Make sure the step has spaces on the right hand side.
18. [Vowels](./vowels/vowels.js) - Write a function that returns the number of **vowels** used in a string.
19. [Weave](./weave/weave.js) - A **weave** receives two Queues as arguments and combines the contents of each into a new, third Queue. The third Queue contains the **alternating** content of the two queues.

--------------------------------------------------------------------------------

## Data Structures

Ways of organizing information with an optimal **runtime complexity** for adding or removing records.

JavaScript natively implements several data structures. **You will still be asked about _inferior_ data structures**

1. [Queue](./js/queue/queue.js)
2. [Stack](./js/stack/stack.js)
3. [Queue from Stack](./js/queue-from-stack/queue-from-stack.js)
4. [Weave (example)](./js/weave/weave.js)

## Memoization

Store the arguments of each `fn` call along with the `result`.

If the `fn` is called again with the **same arguments**, return the pre-computed result, rather than running the function again.

1. [Memoize](./js/memoize/memoize.js)

## Runtime Complexity

### What is?

Describes the **performance** of an algorithm.

How much more processing power / time is required to run your algorithm if we double the inputs?

#### Runtimes

Name             | Notation       | Description
---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Constant Time    | **1**          | No matter how many elements we're working with, the algorithm / operation will always take the same amount of time.
Logarithmic Time | **log(n)**     | If you double the number of elements you are iterating over but you don't double the amount of work. Always assume that searching operations are `log(n)`.
Linear Time      | **n**          | Iterating through all elements in a collection of data. If you see a `for` loop spanning from `0` to `array.length`, you probably have an `n`, or linear runtime. `reverse-string`
Quasilinear Time | **n * log(n)** | You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Assume that many types of sorting operation is `n * log(n)`.
Quadratic Time   | **n^2**        | Every element in a collection has to be compared to every other element. 'The handshake problem' `steps` Each additional element that we add to a collection, has to deal with all of the other elements in the collection.
Exponential Time | **2^n**        | Adding a **single** element to a collection, the processing power doubles.

### Big 'O' Notation

What is the efficiency of your algorithm?

Big 'O' Notation is a way of writing out this runtime complexity in the academic world.

Notation | Runtime
-------- | ---------
O(n)     | Linear
O(1)     | Constant
O(n^2)   | Quadratic

### Identifying Runtime Complexity

How?                                                                             | Complexity
-------------------------------------------------------------------------------- | -------------------------------------------------
Iterating with a simple `for` loop through a single collection? `reverse-string` | Probably **O(n)**
Iterating through half a collection?                                             | Still **O(n)** There are no constants in runtime.
Iterating through two **different** collections with separate `for` loops?       | **O(n + m)**
Two nested `for` loops iterating over the same collection?                       | **O(n^2)**
Two nested `for` loops iterating over different collections?                     | **O(n * m)**
Sorting?                                                                         | **O(n * log(n))**
Searching a sorted array?                                                        | **O(log(n))**

### Space Complexity

How much more memory is required by doubling the problem set?
