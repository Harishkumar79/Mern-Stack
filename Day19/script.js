function timmerFunc() {
    let h = Number(document.getElementById("inp-hour").value)
    let m = Number(document.getElementById("inp-min").value)
    let s = Number(document.getElementById("inp-sec").value)

    let time = setInterval(() => {
        if(s>0) {
            s--
        } else if(m>0) {
            m--
            s=59
        } else if(h>0) {
            m--
            h--
            s=59
            m=59
        } else if(m==0 && h == 0 && s == 0){
            alert("Time's up")
            clearInterval(time)
            document.getElementById("inp-hour").value = "00"
            document.getElementById("inp-min").value = "00"
            document.getElementById("inp-sec").value = "00"
        }
        document.getElementById("hour").innerText = h
        document.getElementById("min").innerText = m
        document.getElementById("sec").innerText = s
    }, 1000);
    console.log(h, m, s)

    
}