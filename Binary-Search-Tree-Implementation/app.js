//BST initially is null and later has left and right child nodes to it.

function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}


// Insert a new node in BST.

// Pseudocode: 

// - Check if not valid value & return null.
// - Else check if inserted value is less than or equal to the node's current value.
// - If yes, check left node is empty, then create new node with this value
// - Else, run recursive loop for left node with the same value
// - If no,check right node is empty, then create new node with this value
// - Else, run recursive loop for right node with the same value

BST.prototype.InsertNode = function(value){
    var newNode = new BST(value);
    if(!value && value!=0){
        return null;
    } else if (value <= this.value){
        if(!this.left){
            this.left = newNode;
        } else {
            this.left.InsertNode(value);
        }
        return value;
    } else {
        if(!this.right){
            this.right = newNode;
        } else {
            this.right.InsertNode(value);
        }
        return value;
    }
}
var bstObj = new BST(50);

bstObj.InsertNode(30);
bstObj.InsertNode(20);
bstObj.InsertNode(45);
bstObj.InsertNode(10);
bstObj.InsertNode(35);
bstObj.InsertNode(70);
bstObj.InsertNode(60);
bstObj.InsertNode(100);
bstObj.InsertNode(59);
bstObj.InsertNode(85);

// console.log(bstObj);

// Check if BST nodes contain a value

// PseudoCode:

// - Invalid inputs return false
// - Check if current node value is equal to passed value, if yes return true
// - Else its greater, check current right node, if its null return false. Else, run a recursive loop for right node.
// - Else its smaller, check current left node, if its null return false. Else, run a recursive loop for left node.


BST.prototype.containsValue = function(value){
    if(!value & value!=0){
         console.log(false);
        return false;
    }
    if(value === this.value){
        console.log(true);
        return true;
    } else if (value > this.value){
        if(!this.right) return false; 
        else this.right.containsValue(value);
    } else {
        if(!this.left) return false;
        else this.left.containsValue(value);
    }
};

console.log("" + bstObj.containsValue(30));


BST.prototype.depthFirstTraversal = function(iteratorFunc){
    if(this.left) this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc);
};
