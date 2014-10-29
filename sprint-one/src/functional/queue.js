var makeQueue = function(){
  var someInstance = {};

  var length = 0;
  var removed = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
      storage[length] = value;
      length++;
  };

  someInstance.dequeue = function(){
    if(length > removed){
      var result = storage[removed];
      delete storage[removed];
      removed++;
    }
    return result;
  };

  someInstance.size = function(){
    return length - removed;
  };

  return someInstance;
};
