var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var ptr = list.head;
    while(ptr){
      if(ptr.value === target){
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * list.addToTail has an O(1) time complexity
 * list.removeHead has an O(1) time complexity
 * list.contains has an O(n) time complexity
 */
