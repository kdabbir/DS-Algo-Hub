//LinkedList initially is null and later has head and tail nodes in it.

function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev ){
    this.value = value;
    this.prev = prev;
    this.next = next;
}

//Create new nodes.
var Node1 = new Node(100, 'Node2', null);
var Node2 = new Node(200, 'Node3',null);

//Insertion of nodes at head
// PseudoCode:
// - Create new node with value, prev as null and next to current head(this.head).
// - Check Current head. If its empty, make both head and tail with the new node.
// - Else, make current head prev to new node.
// - Make current head to new node.

LinkedList.prototype.addToHead = function(value){
   var newNode =  new Node(value, this.head, null);
    if(this.head){
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
};

var ll= new LinkedList();
ll.addToHead(100);
ll.addToHead(300);
ll.addToHead(400);
// console.log(ll);

// Insertion of nodes at tail

// PseudoCode: 

// - Create new node with prev as this.tail, next as null and with the value.
// - If current head is empty, make head and tail to new node.
// - Else, make current tail next to new node.
// - Make current tail to new node.

LinkedList.prototype.addToTail = function(value) {
    var tailNode = new Node(value, null, this.tail);
    if(this.head) {
        this.tail.next = tailNode;
    } else {
        this.head = tailNode;
    }
    this.tail = tailNode;
};
ll.addToTail(500);

// console.log(ll);


// Remove head of LL

// PseudoCode:

// - Check if head is empty, if yes, its already empty and return null.
// - Else, Get next node reference and value.
// - Make current Linkedlist head to next node head.
// - If headnode is null (meaning only one element in LL and next element is null), remove tail node.
// - Else, assign headnode prev to null (as it is the new head node)
// - Return value.
LinkedList.prototype.removeHead = function(){
    if(this.head){
        var currentValue = this.head.value;
        //getting NextNode
        var nextNode = this.head.next;
        this.head = nextNode;
        if(this.head){
            nextNode.prev= null;
        } else {
            this.tail = null;
        }
        return currentValue;
    } else {
        return null;
    }
};
var newll = new LinkedList();
newll.addToTail(500);
newll.addToTail(600);
newll.addToTail(700);

//  newll.removeHead();

// Remove tail.

// Pseudocode:

// - Check current head is empty, return null (as no items are there)
// - Else, take tail node previous element.
// - Make previous element the new tail element.
// - Check if tail is empty, then make head as empty. else make next as null.

LinkedList.prototype.removeTail = function(){
 if(!this.head){
    return null;
 } else {
    var currentValue = this.tail.value;
    var previousNode = this.tail.prev;
    this.tail = previousNode;
    if(this.tail){
        previousNode.next = null;
    } else{
        this.head = null;
    }
    return currentValue;
 }
}

// newll.removeTail();
// console.log(newll);

// Searching a value in a linkedlist
// PseudoCode:

// - Assign current head node to a flag variable
// - Initiate a while loop checking if flag is empty.
// - Check current node value and compare with search value, return if its true
// - Else make current node as next node.


LinkedList.prototype.searchValue = function(searchValue){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === searchValue){
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
}; 

var searchLL = new LinkedList();
searchLL.addToHead(56);
searchLL.addToHead(57);
searchLL.addToTail(50);
searchLL.addToHead('hello');
searchLL.addToHead('hello');
searchLL.addToTail(50);

// console.log(searchLL.searchValue('hello'));


// Implementing indexOf - Finding indexes of the value in the linked list.

// Pseudocode:

// - Initialize an array to store the indexes & counter flag to check current position number
// - Make currentHead variable with the current head.
// - Initiate a while loop checking if currentHead is empty.
// - Else, it will compare the value against input and add counter.
// - Return array.

LinkedList.prototype.indexOf = function(value){
    var indexArray = [];
    var currentNode = this.head;
    var counter = 0;
    while(currentNode){
        if(currentNode.value === value){
            indexArray.push(counter); 
        }
        currentNode = currentNode.next;
        counter++;
    }
    return indexArray;
};
console.log(searchLL);

console.log(searchLL.indexOf(50));
