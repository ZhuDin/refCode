function draw(id) {
    const canvas = document.getElementById(id)
    if (canvas == null) {
        return false
    }
    const context = canvas.getContext('2d') 
    context.fillStyle = '#EEEEEE'
    context.fillRect(0, 0, 400, 300)
    context.fillStyle = 'red'
    context.strokeStyle = 'blue'
    context.lineWidth = 1
    context.fillRect(50, 50, 100, 100)
    context.strokeRect(50, 50, 100, 100)
}