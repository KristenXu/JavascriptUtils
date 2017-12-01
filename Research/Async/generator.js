let a = [1,2,3,4,5,6]
let self = this;
function *gen() {
    for(let value of a)
        yield console.log('value', value)
    console.log('end')
    clearTimeout(self.timeoutId)
}

var g = gen();


function run() {
    g.next()
    clearTimeout(self.timeoutId)
    self.timeoutId = setTimeout(run, 200)
}

run()