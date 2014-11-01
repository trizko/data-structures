var makeBinarySearchTree = function(value){
  var bst = Object.create(bstPrototype);
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  return bst;
};

var bstPrototype = {};

bstPrototype.insert = function(value){
  if(this.value > value){
    if(this.left === undefined){
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === undefined){
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstPrototype.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left === undefined) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (this.value < value) {
    if (this.right === undefined) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

bstPrototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
