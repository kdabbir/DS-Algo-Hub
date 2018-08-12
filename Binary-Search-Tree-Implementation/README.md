# Linked-lists implementation in Javascript.
Below functionalities of Binary Search Tree are implemented: 

# 1) Insert a new node in BST.

Pseudocode: 

- Check if not valid value & return null.
- Else check if inserted value is less than or equal to the node's current value.
- If yes, check left node is empty, then create new node with this value
- Else, run recursive loop for left node with the same value
- If no,check right node is empty, then create new node with this value
- Else, run recursive loop for right node with the same value

# 2) Check if BST nodes contain a value

PseudoCode:

- Invalid inputs return false
- Check if current node value is equal to passed value, if yes return true
- Else its greater, check current right node, if its null return false. Else, run a recursive loop for right node.
- Else its smaller, check current left node, if its null return false. Else, run a recursive loop for left node.

# 3) Depth First Traversal for in-order, pre-order and post-orde:


For In-Order 

Pseudocode:

- Objective is to get the left innermost node. From the initial left node, run recursion till it reaches left as null
- Call iteratorFunction (we can add to array or console log here)
- This will get all left values from bottom to top.
- As left values becomes empty, it will take parent node values (this.value).
- Similar way for right node.

For Pre-order

Pseudocode:

- First take the parent value (this.value)
- Next run recursion against all left node values
- Next run recursion against all right node values.

For Post-order

Pseudocode:

- First run recursion against all left node values
- Next run recursion against all right node values.
- Next take the parent value (this.value)



# 4) Breadth first traversal

Pseudocode:
- Initialize an array which stores current level elements.
- Iterate through each element and invoke iteratorFunc with value
- If the node has left node, push node's left node to array
- If it has right node, push node's right node to array.
