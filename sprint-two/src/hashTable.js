var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)){
    var arrayBucket = [];
    arrayBucket.push([k,v]);
    this._storage.set(i, arrayBucket);
  } else {
    var tempBucket = this._storage.get(i);
    tempBucket.push([k,v]);
    this._storage.set(i, tempBucket);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempBucket = this._storage.get(i);
  for (var i = 0; i < tempBucket.length; i++){
    if(tempBucket[i][0] === k){
      return tempBucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempBucket = this._storage.get(i);
  for (var j = 0; j < tempBucket.length; j++){
    if(tempBucket[j][0] === k){
      tempBucket.splice(j,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * HashTable.prototype.insert has an O(1) time complexity
 * HashTable.prototype.retrieve has an O(1) time complexity
 * HashTable.prototype.remove has an O(1) time complexity
 *
 */
