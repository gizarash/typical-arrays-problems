
exports.min = function min (array) {
  if (Array.isArray(array)) {
    if (array.length == 0) {
      return 0;
    } else {
      let min = array[0];
      for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element < min) {
          min = element;
        }
      }
      return min;
    }
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array)) {
    if (array.length == 0) {
      return 0;
    } else {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
          max = element;
        }
      }
      return max;
    }
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
    if (array.length == 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
      }
      return (sum/array.length);
    }
  } else {
    return 0;
  }
}
