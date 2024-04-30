var createCounter = function(init) {
  let counter = init;
  return {
      reset: function() {
          counter = init
          return counter
      },
      increment: function() {
          return ++counter;
      },
      decrement: function() {
          return --counter;
      }
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/