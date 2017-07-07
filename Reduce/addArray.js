let addArray = function(bigArray) {
    return bigArray.reduce((prev, current, bigIndex)=>{
        return addTwoArray(prev, current);
    })
};
function addTwoArray(arr1, arr2) {
    arr1.forEach((item , index) =>{
        arr1[index] += arr2[index]
    })
    return arr1
};


module.exports = addArray;


//test
var result = addArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
console.log('result', result)