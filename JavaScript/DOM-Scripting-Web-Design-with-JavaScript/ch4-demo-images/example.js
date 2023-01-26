// let whichpic = document.getElementsByTagName('a')
// let source   = whichpic[0].getAttribute('href')

function showPic(whichpic) {
    let source      = whichpic.getAttribute('href')
    let placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src', source)
    let text        = whichpic.getAttribute('title')
    let description = document.getElementById('description')
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0]
    console.log(body_element.childNodes.length)
}

window.onload = countBodyChildren