var deepCopy = function (obj) {
  if (typeof obj !== "object" || !obj)
    return obj;
  var cons = obj.constructor;
  if (cons === RegExp)
    return obj;

  if (obj instanceof Date) {
      var copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
  }

  var copy = cons();
  for (var key in obj) {
    if(!obj.hasOwnProperty(key)){
      return
    }
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};

module.exports = deepCopy;