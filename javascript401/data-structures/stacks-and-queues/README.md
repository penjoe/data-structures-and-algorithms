# Stacks and Queues

Implementation and use of both a Stack and a Queue.

[Challenge 10 PR](https://github.com/penjoe/data-structures-and-algorithms/pull/33)

## Challenge

Create both a Stack and a Queue in linked list form. There should be separate classes for nodes, Stacks and Queues. 

The Stack class should generate an empty Stack on instantiation. Within the class have all related methods for properly using a Stack, `push`, `pop` and `peek`. The new Stack should also point to the `top` of the Stack at all times. There should also be a method to return a boolean value depending on whether or not the Stack is empty.

For the Queue class, it should also create an empty Queue upon instantiation. The class should contain methods for using the Queue, `enqueue`, `dequeue` and `peek`. As with the Stack, there should also be a method to check if the Queue is empty or not, returning a boolean value.

## Approach & Efficiency

- Time Complexity: O(1).
- Space Complexity: O(1).

## API

The public methods used in this implementation:

Stack Methods:

- `push(val)` - This method takes a value as an argument. It will add a new node onto the top of the stack with the value passed in as the arg. O(1).
- `pop()`
- This method takes no argument. It removes the top node from the stack and returns just the value of that node. O(1).
- `peek()` - Takes no argument. Returns just the value of the top node without mutating the stack. O(1).
- `isEmpty()` - Takes no argument. Checks whether or not the stack is empty. Returns a boolean: true for empty and false for not empty. O(1).

Queue Methods:

- `enqueue(val)` - This method takes a value as an argument. It will add a new node to the back of the queue with the value passed in as the arg. O(1).
- `dequeue()` - Takes no argument. Removes the node that is at the front of the queue and returns the value of that node. O(1).
- `peek()` - Takes no argument. Looks at the front node in the queue and returns the value of that node without mutating the queue. O(1).
- `isEmpty()` - Takes no argument. Checks whether or not the queue is empty. Returns a boolean: true for empty and false for not empty. O(1).