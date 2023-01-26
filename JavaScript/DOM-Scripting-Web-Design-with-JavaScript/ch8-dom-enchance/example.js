function displayAbbreviations() {
    let abbreviations = document.getElementsByTagName('abbr')
    if (abbreviations.length < 1) return false
    let defs = new Array()
    for (let i = 0; i < abbreviations.length; i++) {
        let definition = abbreviations[i].getAttribute('title')
        let key = abbreviations[i].lastChild.nodeValue
        defs[key] = definition
    }

    let dlist = document.createElement('dl')
    for (key in defs) {
        let definition = defs[key]
        let dtitle = document.createElement('dt')
        let dtitle_text = document.createTextNode(key)
        dtitle.appendChild(dtitle_text)
        let ddesc = document.createElement('dd')
        let ddesc_text = document.createTextNode(definition)
        ddesc.appendChild(ddesc_text)

        dlist.appendChild(dtitle)
        dlist.appendChild(ddesc)
    }

    let header = document.createElement('h2')
    let header_text = document.createTextNode('abbreviations')
    header.appendChild(header_text)

    document.getElementsByTagName('body')[0].appendChild(header)
    document.getElementsByTagName('body')[0].appendChild(dlist)
}

addLoadEvent(displayAbbreviations)

function displayCitations() {
    let quotes = document.getElementsByTagName('blockquote')
    for (let i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute('cite')) {
            continue
        }
        let url = quotes[i].getAttribute('cite')
        let quoteElements = quotes[i].getElementsByTagName('*')
        if (quoteElements.length < 1) {
            continue
        }
        let elem = quoteElements[quoteElements.length - 1]
        let link = document.createElement('a')
        let link_text = document.createTextNode('source')
        link.appendChild(link_text)
        link.setAttribute('href', url)

        let superscript = document.createElement('sup')
        superscript.appendChild(link)
        elem.appendChild(superscript)
    }
}

addLoadEvent(displayCitations)

function displayAccessKeys() {
    let links = document.getElementsByTagName('a')
    console.log(links)
    let akeys = new Array()
    for (let i = 0; i < links.length; i++) {
        let current_link = links[i]
        if (!current_link.getAttribute('accesskey')) continue
        let key = current_link.getAttribute('accesskey')
        let text = current_link.lastChild.nodeValue
        console.log(i)
        akeys[key] = text
    }
    let list = document.createElement('ul')
    for (key in akeys) {
        let text = akeys[key]
        let str = key + ': ' + text
        let item = document.createElement('li')
        let item_text = document.createTextNode(str)
        item.appendChild(item_text)
        list.appendChild(item)
    }

    let header = document.createElement('h3')
    let header_text = document.createTextNode('Accesskeys')
    header.appendChild(header_text)
    document.body.appendChild(header)
    document.body.appendChild(list)
}

addLoadEvent(displayAccessKeys)

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