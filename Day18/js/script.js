function traffic() {
    let timmer = 22, secondary_timmer = 12 , third_timmer = 12; 
    let h1 = document.getElementById("timmer")
    let red = document.getElementById("red")
    let green = document.getElementById("green")
    let yellow = document.getElementById("yellow")


    setInterval(() => {
        h1.innerText = timmer
        h1.style.color = "red"
        console.log(timmer)
        if (timmer == 0) {
            red.style.opacity = "0"
            green.style.opacity = "1"
            yellow.style.opacity = "0"
            h1.style.color = "green"
        } else if (timmer < 0 && timmer > -13) {
            h1.innerText = secondary_timmer
            secondary_timmer--
            h1.style.color = "green"
        } else if (timmer <= -13 && timmer > -25) {
            h1.innerText = third_timmer
            third_timmer--
            h1.style.color = "green"
            red.style.opacity = "0"
            green.style.opacity = "0"
            yellow.style.opacity = "1"
        } else if (timmer == -25) {
            h1.innerText = 22
            timmer = 22
            secondary_timmer = 12
            third_timmer = 12
            red.style.opacity = "1"
            green.style.opacity = "0"
            yellow.style.opacity = "0"
            h1.style.color = "red"
        }
        timmer--
    }, 1000)
}