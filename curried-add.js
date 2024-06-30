function curriedAdd(total = 0) {
    // Return a function that takes an optional argument
    return function(nextNumber) {
      if (nextNumber === undefined) {
        // If no argument is provided, return the total sum
        return total;
      } else {
        // Otherwise, add the argument to the total and return a new function
        return curriedAdd(total + nextNumber);
      }
    };
  }

// module.exports = { curriedAdd };
