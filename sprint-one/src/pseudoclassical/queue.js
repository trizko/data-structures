var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.removed = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  if(this.length > this.removed){
    var result = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed++;
  }

  return result;
};

Queue.prototype.size = function(){
  return this.length - this.removed;
};

