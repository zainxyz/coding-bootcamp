# Coding Bootcamp

Let's go to the Coding Bootcamp together!!!

## List of Exercises

1. [Anagrams](./js/anagrams/anagrams.js) - One string is an anagram of another if it uses the same characters in the same quantity.
2. [Capitalize](./js/capitalize/capitalize.js) - Capitalize the first letter of each word in the string.
3. [Chunk](./js/chunk/chunk.js) - Given an Array and a **chunk** size, divide the Array into many sub-Arrays where each sub-Array is of length **chunk** size.
4. [Fibonacci](./js/fibonacci/fibonacci.js) - Print out the n-th entry in the **Fibonacci** series. The **Fibonacci** series is an ordering of numbers where each number is the sum of the preceeding two.
5. [Fizz-Buzz](./js/fizz-buzz/fizz-buzz.js) - Console.log numbers from 1 to n; but, for multiples of 3 (three) print **fizz**, for multiples of 5 (five) print **buzz**, and for multiples of both 3 (three) and 5 (five) print **fizzbuzz** instead of the number.
6. [Matrix](./js/matrix/matrix.js) - Write a function that accepts an integer `n` and returns an `n x n` spiral matrix.
7. [Max Chars](./js/max-char/max-char.js) - Given a string, return the character that is most commonly used in the string. / What is the most common character in the string?
8. [Memoize](./js/memoize/memoize.js) - Memoize a function, **cache** its results, and return result from **cache** if present.
9. [Palindrome](./js/palindrome/palindrome.js) - Palindromes are strings that form the same word if it they are reversed.
10. [Pyramid](./js/pyramid/pyramid.js) - Write a function that accepts a positive number `n`, then Console.log a **pyramid** shape with `n` levels using the `#` (hash) character. Make sure the **pyramid** has spaces on both the left and right hand sides.
11. [Queue](./js/queue/queue.js) - Create a Queue data-structure, where items are in the **First In First Out** order (FIFO).
12. [Queue from Stack](./js/queue-from-stack/queue-from-stack.js) - Implement a Queue data-structure using two Stacks.
13. [Repeated Chars](./js/repeated-chars/repeated-chars.js) - Does the given string have any repeated characters in it?
14. [Reverse Int](./js/reverse-int/reverse-int.js) - Given an integer, return an integer that is the reverse ordering of the numbers.
15. [Reverse String](./js/reverse-string/reverse-string.js) - Given a string, return a new string with the reversed ordering of the characters.
16. [Stack](./js/stack/stack.js) - Create a Stack data-structure, where items are in the **First In Last Out** order (FILO).
17. [Steps](./js/steps/steps.js) - Write a function that accepts a positive number `n`, then Console.log a **step** shape with `n` levels using the `#` (hash) character. Make sure the step has spaces on the right hand side.
18. [Vowels](./js/vowels/vowels.js) - Write a function that returns the number of **vowels** used in a string.
19. [Weave](./js/weave/weave.js) - A **weave** receives two Queues as arguments and combines the contents of each into a new, third Queue. The third Queue contains the **alternating** content of the two queues.

--------------------------------------------------------------------------------

## Data Structures

Ways of organizing information with an optimal **runtime complexity** for adding or removing records.

JavaScript natively implements several data structures. **You will still be asked about _inferior_ data structures**

1. [Queue](./js/queue/queue.js)
2. [Stack](./js/stack/stack.js)
3. [Queue from Stack](./js/queue-from-stack/queue-from-stack.js)
4. [Weave (example)](./js/weave/weave.js)

### Queue

A Queue is a linear data structure in which the order is First In First Out (FIFO). An example of a queue is a restaurant wait list, where the customer that came first is served first.

- **Enqueue** - Add an item to the queue.
- **Dequeue** - Remove an item from the queue.
- **Front** - Get the front / first item from the queue.
- **Rear** - Get the rear / last item from the queue.

### Stack

A Stack is a linear data structure in which the order is First In Last Out (FILO) or Last In First Out (LIFO). An example of a queue is the plates that are stacked on top of one another at a restaurant. The plate which is at the top is the first one to be removed, whereas the plate that is at the bottommost position is the last to be removed.

- **Push** - Add an item to the stack.
- **Pop** - Remove an item from the stack.
- **Peek** or **Top** - Returns the top item from the stack.
- **isEmpty** - Returns `true` if the stack is empty, else `false`.

### Linked Lists

A Linked List is an ordered collection of data. The collection contains a number of different nodes. Each node contains some amount of data, along with a reference to the next node.

Two special nodes in a Linked List are **Head** node, the very first node, and the **Tail** node, the very last node. The **tail** node can be identified as it does not have a reference to any other node.

Each node has two parts, **data** which can be any valid JavaScript value, and a **reference** to the next node in the list.

As long as you have some number of data and you form some type of connection between them, you can refer to them being a Linked List.

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
