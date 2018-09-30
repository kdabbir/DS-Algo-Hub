function LinkedList(){
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.push = function(value){
  let newNode = new Node(value);
  if(this.head){
    let currNode = this.head;
    while(currNode.next){
      currNode = currNode.next;
    }
    currNode.next = newNode;
  } else {
    this.head = newNode;
  }
  return this;
}
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

console.log(sll);


const reversesll = (ll) => {
  let llArr = [];
  if(!ll.head || !ll.head.next) return ll;
  let currHead = ll.head;
  llArr.push(currHead);

  while(currHead.next){
    currHead = currHead.next;
    llArr.push(currHead);
  }
  ll.head = null;
  while(llArr.length > 0){
    ll.push((llArr.pop()).value);
  }
 return ll;
};

// //test it
 console.log(reversesll(sll));
//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}