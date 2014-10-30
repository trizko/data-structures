var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  if(this._storage[item]){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * setPrototype.add has an O(1) time complexity
 * setPrototype.contains has an O(1) time complexity
 * setPrototype.remove has an O(1) time complexity
 */
