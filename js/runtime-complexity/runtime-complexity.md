# Runtime Complexity

## What is?

Describes the **performance** of an algorithm.

How much more processing power / time is required to run your algorithm if we double the inputs?

### Runtimes

Name             | Notation       | Description
---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Constant Time    | **1**          | No matter how many elements we're working with, the algorithm / operation will always take the same amount of time.
Logarithmic Time | **log(n)**     | If you double the number of elements you are iterating over but you don't double the amount of work. Always assume that searching operations are `log(n)`.
Linear Time      | **n**          | Iterating through all elements in a collection of data. If you see a `for` loop spanning from `0` to `array.length`, you probably have an `n`, or linear runtime. `reverse-string`
Quasilinear Time | **n * log(n)** | You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Assume that many types of sorting operation is `n * log(n)`.
Quadratic Time   | **n^2**        | Every element in a collection has to be compared to every other element. 'The handshake problem' `steps` Each additional element that we add to a collection, has to deal with all of the other elements in the collection.
Exponential Time | **2^n**        | Adding a **single** element to a collection, the processing power doubles.

## Big 'O' Notation

What is the efficiency of your algorithm?

Big 'O' Notation is a way of writing out this runtime complexity in the academic world.

Notation | Runtime
-------- | ---------
O(n)     | Linear
O(1)     | Constant
O(n^2)   | Quadratic

## Identifying Runtime Complexity

How?                                                                             | Complexity
-------------------------------------------------------------------------------- | -------------------------------------------------
Iterating with a simple `for` loop through a single collection? `reverse-string` | Probably **O(n)**
Iterating through half a collection?                                             | Still **O(n)** There are no constants in runtime.
Iterating through two **different** collections with separate `for` loops?       | **O(n + m)**
Two nested `for` loops iterating over the same collection?                       | **O(n^2)**
Two nested `for` loops iterating over different collections?                     | **O(n * m)**
Sorting?                                                                         | **O(n * log(n))**
Searching a sorted array?                                                        | **O(log(n))**

## Space Complexity

How much more memory is required by doubling the problem set?
