let drawing = document.getElementById('drawing')

if (drawing.getContext) {
    let context = drawing.getContext('2d')

    context.strokeStyle = 'red'
    context.fillStyle = '#0000ff'

    context.fillRect(10, 10, 50, 50)
    context.strokeRect(30, 30, 50, 50)
    context.clearRect(40, 40, 10, 10)

    let imgURI = drawing.toDataURL("image/jpeg")
    let image = document.createElement('img')
    image.src = imgURI
    document.body.appendChild(image)
}

// ----------------------------------------------------------------------------
