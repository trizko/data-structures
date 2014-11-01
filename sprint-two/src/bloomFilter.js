var BloomFilter = function(){
  this._limit = 18;
  this._storage = makeLimitedArray(this._limit);
};

BloomFilter.prototype.insert = function(k){
  var h1 = hash1(k, this._limit);
  var h2 = hash2(k, this._limit);
  var h3 = hash3(k, this._limit);

  this._storage.set(h1, true);
  this._storage.set(h2, true);
  this._storage.set(h3, true);
};

BloomFilter.prototype.retrieve = function(k){
  var h1 = hash1(k, this._limit);
  var h2 = hash2(k, this._limit);
  var h3 = hash3(k, this._limit);

  if(this._storage.get(h1) &&
     this._storage.get(h2) &&
     this._storage.get(h3)) {
    return true;
  }

  return false;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
