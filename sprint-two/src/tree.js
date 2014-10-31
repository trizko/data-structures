var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var children = this.children;
  var isFound = false;

  var inner = function(treeArray){
    for(var i = 0; i < treeArray.length; i++){
      if(treeArray[i].value === target){
        return isFound = true;
      }
      if(treeArray[i].children.length > 0){
        inner(treeArray[i].children);
      }
    }
  };

  inner(children);
  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
