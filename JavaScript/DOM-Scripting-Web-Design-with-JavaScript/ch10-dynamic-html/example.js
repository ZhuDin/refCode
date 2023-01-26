function positionMessage() {
    if (!document.getElementById) return false
    if (!document.getElementById('message')) return false
    let elem = document.getElementById('message')
    elem.style.position = 'absolute'
    elem.style.left = '50px'
    elem.style.top = '100px'
    moveElement('message', 200, 100, 10)

    if (!document.getElementById('message2')) return false
    let elem2 = document.getElementById('message2')
    elem2.style.position = 'absolute'
    elem2.style.left = '50px'
    elem2.style.top = '50px'
    moveElement('message2', 125, 125, 20)
}

addLoadEvent(positionMessage)


function prepareSlideshow() {
    if (!document.getElementsByTagName) return false
    if (!document.getElementById) return false
    if (!document.getElementById('linklist')) return false
    let slideshow = document.createElement('div')        
    slideshow.setAttribute('id', 'slideshow')
    let preview = document.createElement('img')
    preview.setAttribute('src', "C:/Users/ee/Pictures/iphone-13-select.jpg")
    preview.setAttribute('alt', 'building blocks of web design')
    preview.setAttribute('id', 'preview')
    preview.setAttribute('width', '1024')
    preview.setAttribute('height', '576')
    slideshow.appendChild(preview)

    let list = document.getElementById('linklist')
    insertAfter(slideshow, list)
    let links = document.getElementsByTagName('a')
    links[0].onmouseover = function() {
        moveElement('preview', -0, 0, 10)
    }
    links[1].onmouseover = function() {
        moveElement('preview', -256, 0, 10)
    }
    links[2].onmouseover = function() {
        moveElement('preview', -512, 0, 10)
    }
}

addLoadEvent(prepareSlideshow)

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


function moveElement(elementId, final_x, final_y, interval) {
    if (!document.getElementById) return false
    if (!document.getElementById(elementId)) return false
    let elem = document.getElementById(elementId)
    if (elem.movement) {
        clearTimeout(elem.movement)
    }
    if (!elem.style.left) {
        elem.style.left = '0px'
    }
    if (!elem.style.top) {
        elem.style.top = '0px'
    }
    let xpos = parseInt(elem.style.left)
    let ypos = parseInt(elem.style.top)
    let dist = 0
    if (xpos == final_x && ypos == final_y) {
        return true
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10)
        xpos += dist
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10)
        xpos -= dist
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10)
        ypos += dist
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10)
        ypos -= dist
    }
    elem.style.left = xpos + 'px'
    elem.style.top  = ypos + 'px'
    let repeat = 'moveElement("' + elementId + '", ' + final_x + ', '
    repeat += final_y + ', ' + interval + ')'
    elem.movement = setTimeout(repeat, interval)
}


function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling)
    }
}