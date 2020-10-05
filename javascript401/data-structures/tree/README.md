# Trees
<!-- Short summary or background information -->
Implementation of a Binary Search Tree.

## Challenge
<!-- Description of the challenge -->
Create a class called BinarySearchTree that has two methods, `add()` and `contains()`. The `add()` method will add a new node to the tree and order if according to standard BST sorting. `Contains()` will search through the tree and return a true or false boolean depending on whether or not the given value exists. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach for this DS implementation was simple. To add nodes to the tree, recursion was the method of choice. Create a method that will add a node as the left child or right child depending on if the value to be added was smaller or larger than the root, respectievely. If there is already a left/right child, have the method call itself and keep doing the same thing until there was a spot insert the new node. As for traversal of the tree, methods from the parent `BinaryTree` class were used. The traversal methods were `preOrder()`, `inOrder()` and `postOrder()`. The `contains()` method used a more traditional while loop approach, similar to that of a linked list traversal.  

Time Complexity:
- `add()` - This method has time complexity of O(h) or O(height). Since the method is using a depth first traversal approach, the Big O will only ever be the height of the tree, or how many edges it has.
- `contains()` - This method will also be an O(h) since it's only traversing one side of the tree and always only searching one side of the root, all the way to the leaf if the searched for value doesn't exist.

Space Complexity:
- `add()` - The space complexity of this method is O(h) since the method only make as many recursive calls as there are edges on the tree. Again, this is a depth first operation.
- `contains()` - This method has a space complexity of O(1) since there is nothing being created and no use of recursion. 

## API
<!-- Description of each method publicly available in each of your trees -->
- `add(value)` - A method of the BonarySearchTree class that will add a node to the tree and sort it. If the inserted value is `<` the root node, it will add it as the left child of the root node. If the root node has a left child, it will traverse the tree until there is no left child and add the new node. If the inserted value is `>` the root node, it will do the same as above, traverse the tree until there is an open right child position and add the node. This method used a helper function called `recursiveAdd(root, node)` that takes the current root node and the node to be added. It recursively calls itself until the base case is met. The base case being, there is a left/right child node spot available to add the new node.

- `contains(value)` - A method of the BinarySearchTree class that will take in a value and search the tree for that value, returning a boolean value if that value exists or not. Uses a binary search approach, so at the worst case will only ever search one side of the tree.