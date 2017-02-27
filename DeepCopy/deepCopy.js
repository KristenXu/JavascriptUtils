var deepCopy = function (obj) {
  if (typeof obj !== "object" || !obj)
    return obj;
  var cons = obj.constructor;
  if (cons === RegExp)
    return obj;

  var copy = cons();
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};

module.exports = deepCopy;