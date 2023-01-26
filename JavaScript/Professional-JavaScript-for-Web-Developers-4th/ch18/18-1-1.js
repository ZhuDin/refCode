(function() {
    function updateAnimations() {
        console.log(1) // doAnimation1()
        console.log(1) // doAnimation2()
    }
    setInterval(updateAnimations, 7)
    /*
    setInterval(updateAnimations, 17)
    60Hz : 1000ms/60=17ms
    */
})()