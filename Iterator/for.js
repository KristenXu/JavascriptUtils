let obj = {
    a: 1,
    b: 2
}
//遍历对象
for (let key in obj) {
    console.log(key)
}

let arr = [1,2,3]
//遍历数组
arr.forEach(function(currentValue, index,array){
    console.log(currentValue)
});

//遍历具有iterator特征的数据结构
let set =new Set([1, 2, 3])
for (let value of set) {
    console.log(value)
}