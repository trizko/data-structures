var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.removed = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function () {
  if(this.length > this.removed){
    var result = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed++;
  }
  return result;
};

queueMethods.size = function () {
  return this.length - this.removed;
};
