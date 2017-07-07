[{'m': 2},{'m': 3},{'m': 4}].reduce((pre, current, index) =>{
    return pre + current.m
}, 0)

[{'m': 2},{'m': 3},{'m': 4}].reduce((pre, current, index) =>{
    if(index === 0){
    return current.m
    }
else{return pre + current.m}
}, '')