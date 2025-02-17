// Write a function which get's an array and an element and returns a array with this element at the end
let arr = [1,2,3]
function addItme (arre, a=10) {
    arre.push(a)
    return arre
}
console.log(addItme(arr))
