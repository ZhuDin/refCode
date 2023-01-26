document.write('<p>This is inserted.</p>')

let testdiv = document.getElementById('testdiv')
console.log(testdiv.innerHTML)

addLoadEvent(function() {
    let para = document.createElement('p')
    let info = 'nodeName: ' 
    info += para.nodeName
    info += '; nodeType: '
    info += para.nodeType
    console.log(info)
    
    testdiv.appendChild(para)

    let txt = document.createTextNode('DOM createElement and createTextNode')
    para.appendChild(txt)
})

addLoadEvent(function() {
    if (!document.createElement)  return false
    if (!document.createTextNode) return false
    if (!document.getElementById) return false

    let placeholder = document.createElement('img')
    placeholder.setAttribute('id', 'placeholder')
    placeholder.setAttribute('src', 'C:/Users/ee/Pictures/glb35.png')
    placeholder.setAttribute('height', '360')
    placeholder.setAttribute('width', '720')
    placeholder.setAttribute('alt', 'my image gallery')
    
    let description = document.createElement('p')
    let desctext = document.createTextNode('Choose an image')
    description.setAttribute('id', 'description')
    description.appendChild(desctext)

    let gallery = document.getElementById('imagegallery')
    let links   = gallery.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this)
        }
        // links[i].onkeypress = links[i].onclick
    }

    gallery.parentNode.insertBefore(placeholder, gallery)
    document.getElementsByTagName('body')[0].appendChild(description)
})

function showPic(whichpic) {
    let source = whichpic.getAttribute('href')
    let placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src', source)
    let text = whichpic.getAttribute('title')
    let description = document.getElementById('description')
    description.firstChild.nodeValue = text
    return false
}


// ----------------------------------------------------------------------------- 
function addLoadEvent(func) {
    let oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function() {
            oldonload()
            func()
        }
    }
}

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement, targetElement.newSibling)
    }
}