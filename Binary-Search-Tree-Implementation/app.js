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
bstObj.InsertNode(105);
console.log(bstObj);

// console.log(bstObj);

// Check if BST nodes contain a value

// PseudoCode:

// - Invalid inputs return false
// - Check if current node value is equal to passed value, if yes return true
// - Else its greater, check current right node, if its null return false. Else, run a recursive loop for right node.
// - Else its smaller, check current left node, if its null return false. Else, run a recursive loop for left node.


BST.prototype.containsValue = function(value){
  if(!value & value!=0){
      // console.log(false);
      return false;
  }
  if(value === this.value){
      return true;
  } else if (value > this.value){
      if(!this.right) return false; 
      else return this.right.containsValue(value);
  } else {
      if(!this.left) return false;
      else return this.left.containsValue(value);
  }
};

// Depth First Traversal for in-order, pre-order and post-order:

// Inorder Traversal (Left-Root-Right)
// Preorder Traversal (Root-Left-Right)
// Postorder Traversal (Left-Right-Root)


// For In-Order 

// Pseudocode:

// - Objective is to get the left innermost node. From the initial left node, run recursion till it reaches left as null
// - Call iteratorFunction (we can add to array or console log here)
// - This will get all left values from bottom to top.
// - As left values becomes empty, it will take parent node values (this.value).
// - Similar way for right node.
// 10
// 20
// 30
// 35
// 45
// 50
// 59
// 60
// 70
// 85
// 100
// 105



// For Pre-order

// Pseudocode:

// - First take the parent value (this.value)
// - Next run recursion against all left node values
// - Next run recursion against all right node values.

// For Post-order

// Pseudocode:

// - First run recursion against all left node values
// - Next run recursion against all right node values.
// - Next take the parent value (this.value)



function log(value){
  console.log(value);
}


BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if(order ==="pre-order") iteratorFunc(this.value);
  if(this.left) this.left.depthFirstTraversal(iteratorFunc,order);
  if(order === "in-order") iteratorFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(iteratorFunc,order);
  if(order === "post-order") iteratorFunc(this.value);
};

// console.log(bstObj);
bstObj.depthFirstTraversal(log,"in-order");
//console.log(bstObj.depthFirstTraversal(log,"pre-order"));
// bstObj.depthFirstTraversal(log,"post-order");


//Breadth first traversal
// Pseudocode:
// - Initialize an array which stores current level elements.
// - Iterate through each element and invoke iteratorFunc with value
// - If the node has left node, push node's left node to array
// - If it has right node, push node's right node to array.


//Breadth First Traversal (Or Level Order Traversal)



BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  var queue = [this];
  while(queue.length){
      var currentNode = queue.shift();
      if(currentNode){
      iteratorFunc(currentNode);
      // console.log(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }
}


BST.prototype.getMinVal = function(){
  if(!this.value){
    return null;
  }
  if(this.left){
    return this.left.getMinVal();
  } else {
    return this.value;
}
}


BST.prototype.getMaxVal = function(){
  if(!this.value){
    return null;
  }
  if(this.right){
    return this.right.getMaxVal();
  } else {
    return this.value;
}
}


var output = bstObj.containsValue(35);
// console.log(output);
// function log(value){
//   console.log(value);
// }


function logBFS(node){
  console.log(node.value);
}
//  bstObj.depthFirstTraversal(log,'post-order');

 //bstObj.breadthFirstTraversal(logBFS);
