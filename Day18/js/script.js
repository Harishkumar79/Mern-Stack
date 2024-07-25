function traffic() {
    let timmer = 10, secondary_timmer = 5
    let h1 = document.getElementById("timmer")
    let red = document.getElementById("red")
    let green = document.getElementById("green")

    setInterval(() => {
        h1.innerText = timmer
        h1.style.color = "red"
        console.log(timmer)
        if (timmer == 0) {
            red.style.opacity = "0"
            green.style.opacity = "1"
            h1.style.color = "green"
        } else if (timmer < 0 && timmer > -5) {
            h1.innerText = secondary_timmer
            secondary_timmer--
            h1.style.color = "green"
        } else if (timmer == -5) {
            h1.innerText = 10
            timmer = 10
            secondary_timmer = 5
            red.style.opacity = "1"
            green.style.opacity = "0"
            h1.style.color = "red"
        }

        timmer--
    }, 1000)
}