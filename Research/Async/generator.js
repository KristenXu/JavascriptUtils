let a = [1,2,3,4,5,6]
function *gen() {
    for(let value of a)
        yield console.log('value', value)
}

var g = gen();


this.timeoutId = setInterval(() => {
    g.next()
}, 1000)