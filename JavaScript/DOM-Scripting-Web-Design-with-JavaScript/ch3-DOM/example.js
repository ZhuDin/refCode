let id  = document.getElementById('purchases')
let tagName = document.getElementsByTagName('li')
let className = document.getElementsByClassName('sale')
console.log(id)
console.log(tagName)
console.log(className)
console.log(document.getElementsByTagName('*').length)

let paras = document.getElementsByTagName('p')
for (let i=0; i < paras.length; i++) {
    if (paras[i].getAttribute('title') == null) {
        paras[i].setAttribute('title', 'setAttribute paras')
    }
    console.log(paras[i].getAttribute('title'))
}
