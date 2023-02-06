let drawing = document.getElementById('drawing')

if (drawing.getContext) {
    let context = drawing.getContext('2d')

    context.strokeStyle = 'red'
    context.fillStyle = '#0000ff'

    context.fillRect(10, 10, 50, 50)
    context.strokeRect(30, 30, 50, 50)
    context.clearRect(40, 40, 10, 10)

    context.beginPath();
    context.arc(200, 200, 99, 0, (2 * Math.PI), false)
    context.moveTo(294, 200)
    context.arc(200, 200, 94, 0, (2 * Math.PI), false)
    context.moveTo(200, 200)
    context.lineTo(200, 130)
    context.moveTo(200, 200)
    context.lineTo(150, 200)
    context.stroke()

    context.font = 'bold 14px console'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('12', 200, 120)

    let imgURI = drawing.toDataURL("image/jpeg")
    let image = document.createElement('img')
    image.src = imgURI
    document.body.appendChild(image)
}

// ----------------------------------------------------------------------------
