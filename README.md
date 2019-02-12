# Coding Bootcamp

Let's go to the Coding Bootcamp together!!!

> Data Structures + Algorithms = Programs!

`Data Structures` are ways to store the data, and `Algorithms` are functions or ways to use the data structures to write our `Programs`.

Good programmers pick the right **data structure**, the right **algorithm**, to write good **programs**.

## What is good code?

> Readable and Scalable.

1. Readability - Is your code clean, can others understand your code?
2. Scalability - Can your code scale?

Scalability can be divided further into...

1. Speed - How fast is our runtime on the code? How much time does it take for a function to run?
2. Memory - Computers have a limited memory.

## 3 Pillars of Code

### Readable

Write readable, clean code that others can read, and that is maintainable.

### Speed

> Time Complexity

Type of code that we call time complexity, has a `Big O` time complexity that is scaleable.

### Memory

> Space Complexity

What is the memory usage of code? Does it use a lot of memory?

## List of Exercises

1. [Anagrams](./js/anagrams/anagrams.js) - One string is an anagram of another if it uses the same characters in the same quantity.
2. [Capitalize](./js/capitalize/capitalize.js) - Capitalize the first letter of each word in the string.
3. [Chunk](./js/chunk/chunk.js) - Given an Array and a **chunk** size, divide the Array into many sub-Arrays where each sub-Array is of length **chunk** size.
4. [Fibonacci](./js/fibonacci/fibonacci.js) - Print out the n-th entry in the **Fibonacci** series. The **Fibonacci** series is an ordering of numbers where each number is the sum of the preceeding two.
5. [Fizz-Buzz](./js/fizz-buzz/fizz-buzz.js) - Console.log numbers from 1 to n; but, for multiples of 3 (three) print **fizz**, for multiples of 5 (five) print **buzz**, and for multiples of both 3 (three) and 5 (five) print **fizzbuzz** instead of the number.
6. [Linked Lists](./js/linked-list/linked-list.js) - Implement the Linked List type data structure with multiple methods.
7. [Matrix](./js/matrix/matrix.js) - Write a function that accepts an integer `n` and returns an `n x n` spiral matrix.
8. [Max Chars](./js/max-char/max-char.js) - Given a string, return the character that is most commonly used in the string. / What is the most common character in the string?
9. [Memoize](./js/memoize/memoize.js) - Memoize a function, **cache** its results, and return result from **cache** if present.
10. [Palindrome](./js/palindrome/palindrome.js) - Palindromes are strings that form the same word if it they are reversed.
11. [Pyramid](./js/pyramid/pyramid.js) - Write a function that accepts a positive number `n`, then Console.log a **pyramid** shape with `n` levels using the `#` (hash) character. Make sure the **pyramid** has spaces on both the left and right hand sides.
12. [Queue](./js/queue/queue.js) - Create a Queue data-structure, where items are in the **First In First Out** order (FIFO).
13. [Queue from Stack](./js/queue-from-stack/queue-from-stack.js) - Implement a Queue data-structure using two Stacks.
14. [Repeated Chars](./js/repeated-chars/repeated-chars.js) - Does the given string have any repeated characters in it?
15. [Reverse Int](./js/reverse-int/reverse-int.js) - Given an integer, return an integer that is the reverse ordering of the numbers.
16. [Reverse String](./js/reverse-string/reverse-string.js) - Given a string, return a new string with the reversed ordering of the characters.
17. [Stack](./js/stack/stack.js) - Create a Stack data-structure, where items are in the **First In Last Out** order (FILO).
18. [Steps](./js/steps/steps.js) - Write a function that accepts a positive number `n`, then Console.log a **step** shape with `n` levels using the `#` (hash) character. Make sure the step has spaces on the right hand side.
19. [Vowels](./js/vowels/vowels.js) - Write a function that returns the number of **vowels** used in a string.
20. [Weave](./js/weave/weave.js) - A **weave** receives two Queues as arguments and combines the contents of each into a new, third Queue. The third Queue contains the **alternating** content of the two queues.

--------------------------------------------------------------------------------

## Data Structures

Ways of organizing information with an optimal **runtime complexity** for adding or removing records.

JavaScript natively implements several data structures. **You will still be asked about _inferior_ data structures**

1. [Linked List](./js/linked-list/linked-list.js)
2. [Queue](./js/queue/queue.js)
3. [Stack](./js/stack/stack.js)
4. [Queue from Stack](./js/queue-from-stack/queue-from-stack.js)
5. [Weave (example)](./js/weave/weave.js)

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

### Trees

A tree consists of multiple **nodes** that hold some **data** and hold reference to all of its **children**. A child is any node that is directly under any given node. There is a parent - to - child relationship between nodes, and sibling relationship between the children of the parent.

#### Tree Traversal

Iterating through all the different elements within a tree. Similar to that behavior of LinkedLists. We really care about our ability to iterate through all the different elements within a tree.

**Different ways of Tree Traversal**

Does a way of traversing down a Tree matter? **Yes, it does!** Just think of a tree as a hierarchy of the top level executives at a company. You have the following:

```bash
- CEO
    - CTO
        - VP Engineering
        - VP Infrastructure
        - VP Design
    - CMO
    - COO
        - Product Manager
```

In the tree above, the order matters.

`Breath-First` If you were to go through all of the positions in this company, based on the order of their position / order of importance / order of their hierarchy in the organization; then it would be CEO, CTO, CMO, COO, VP Engineering, VP Infrastructure, VP Design, and Product Manager.

#### Breath-First Tree Traversal

Iterate through each level of the tree from left-to-right.

#### Depth-First Tree Traversal

Start from the top of the Tree and iterate through the very first child, then its children, and so on and so forth, until you reach the very last child. Then go back up the tree and through the immediate second child, and so on.

With Depth-First Traversal we try to get to the bottom of the tree as fast as possible.

- If you know a solution is not far from the root of the tree : **BFS**
- If the tree is very deep and solutions are rare : **BFS** (as DFS would take too long to go through each side of the tree)
- If tree is very wide : **DFS** (as BFS will need too much memory)
- If solutions are frequent but located deep in the tree : **DFS**
- Determine whether a path exists between two nodes : **DFS**
- Finding the shortest path : **BFS**

### Binary Search Tree

In a Binary Search Tree, every node can have at most 2 children. We refer to these two children by their position relative to the parent, i.e. left-node or right-node.

The term `search` in a Binary Search Tree, places the requirement on the values to the left and right hand side of the parent node.

You can restrict or validate the values of every single node. (create a pattern)

**Interview Question**

> How to add new nodes into an existing Binary Search Tree?

- Check the value of the newly to be added Node and traverse through the tree, validating for each of the current nodes (including the root node), then going Left or Right depending on the outcome of the validation.

> Are you working with a Binary Search Tree? Validate a Binary Search Tree.

- Traverse through the tree and validate each node to the Left and Right hand side.

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

--------------------------------------------------------------------------------

## How would you design Twitter?

### Things to keep in mind

- **There is no right answer.** (ebay, uber, twitter are built by thousands of devs, cannot have a single concrete answer)
- **Every interviewer will expect a different answer.** (a. how would you identify challenges in the product. b. how would you scale out the product for millions of users.)
- **Focus is usually on the `data` model.** (how would you build out a database to reflect all the information for the given product. how would you store tweets or users on the database? how the web user interface should be put together. Don't talk about the technologies that you would use, but focus on why you would use them.)
- **Draw stuff out on the board.** (draw out the main UI, mobile screen, help guide the discussion and it'll help you understand how to develop the product)
- **Talk. Communicate.** (voice what you are thinking. respond and give back an instant question.)

### Strategy

- **Identify 2 (two) Core Features** (pick out 2 core features and start to think about possible ways of implementing them)
- **Possible Implementation** (how would you build the user feed, or the possible who you should follow features)
- **Identify and Address Difficulties** (what does the tweet look like in the database? how to make the #topic and @mention systems? How to implement retweets?) (what are the most possible tweets that we want to surface to the user when they first log into the application)
- **Solutions for Scaling** (caching data and deployment options) (for each user when they come to the server, calculate the user's feeds, also store them in some memory store. pull out the previous request from memory store and send back to the user) (load balancer, with multiple servers - horizontal scaling)

--------------------------------------------------------------------------------

## Sorting

Name          | Worst Case Runtime | Difficulty
------------- | ------------------ | ----------
BubbleSort    | `n^2`              | easiest
SelectionSort | `n^2`              | easier
MergeSort     | `n*log(n)`         | medium
