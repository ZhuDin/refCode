function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false
    let headers = document.getElementsByTagName('h1')
    let elem = null
    for (let i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling)
        elem.style.fontWeight = 'bold'
        elem.style.fontSize = '1.2em'
    }
}

addLoadEvent(styleHeaderSiblings)

function stripeTables() {
    if (!document.getElementsByTagName) return false
    let tables = document.getElementsByTagName('table')
    let odd = false
    let rows = null
    for (let i = 0; i < tables.length; i++) {
        rows = tables[i].getElementsByTagName('tr')
        for (let j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = '#ffc'
                odd = false;
            } else {
                odd = true
            }
        }
    }
}

addLoadEvent(stripeTables)

function highlightRows() {
    if (!document.getElementsByTagName) return false
    let rows = document.getElementsByTagName('tr')
    for (let i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = 'bold'
        }
        rows[i].onmouseout  = function() {
            this.style.fontWeight = 'normal'
        }
    }
}

addLoadEvent(highlightRows)

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

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling)
    }
    return null
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value
    } else {
        newClassName = element.className
        newClassName += ' '
        newClassName += value
        element.className = newClassName
    }
}