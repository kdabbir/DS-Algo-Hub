# Linked-lists implementation in Javascript.
Below functionalities of LinkedLists are implemented: 

# 1) Insertion of nodes at head

PseudoCode:
- Create new node with value, prev as null and next to current head(this.head).
- Check Current head. If its empty, make both head and tail with the new node.
- Else, make current head prev to new node.
- Make current head to new node.

# 2) Insertion of nodes at tail

PseudoCode: 

- Create new node with prev as this.tail, next as null and with the value.
- If current head is empty, make head and tail to new node.
- Else, make current tail next to new node.
- Make current tail to new node.

# 3) Remove head of LL

PseudoCode:

- Check if head is empty, if yes, its already empty and return null.
- Else, Get next node reference and value.
- Make current Linkedlist head to next node head.
- If headnode is null (meaning only one element in LL and next element is null), remove tail node.
- Else, assign headnode prev to null (as it is the new head node)
- Return value.

# 4) Remove tail.

Pseudocode:

- Check current head is empty, return null (as no items are there)
- Else, take tail node previous element.
- Make previous element the new tail element.
- Check if tail is empty, then make head as empty. else make next as null.

# 5) Searching a value in a linkedlist

PseudoCode:

- Assign current head node to a flag variable
- Initiate a while loop checking if flag is empty.
- Check current node value and compare with search value, return if its true
- Else make current node as next node.


# 6) Implementing indexOf - Finding all indexes of the value in the linked list.

Pseudocode:

- Initialize an array to store the indexes & counter flag to check current position number
- Make currentHead variable with the current head.
- Initiate a while loop checking if currentHead is empty.
- Else, it will compare the value against input and add counter.
- Return array.
