function addTen(num) {
    num += 10
    return num
}

let count = 20
let result = addTen(count)

console.log(count)
console.log(result)

function setName(obj) {
    obj.name = 'zd'
    obj = new Object()
    obj.name = 'dz'
    console.log(obj)
}

let person = new Object()
setName(person)

console.log(person.name)