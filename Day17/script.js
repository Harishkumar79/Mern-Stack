function storeData() {
    let username = document.getElementById("username").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let dob = document.getElementById("dob").value
    let color = document.getElementById("clr").value
    let country = document.getElementById("country").value
    // !let gender = document.getElementById("gender").value -> this is the wrong method
    let gender = document.querySelector("input[type='radio']:checked").value
    let prog = document.querySelectorAll("input[type='checkbox']:checked")
    let prog_final = []
    for(let i=0; i<prog.length; i++) {
        prog_final = [...prog_final, prog[i].value]
    }
    // console.log("Data stored", val)
    // console.log(username, age, email, password)
    // console.log(username, age, email, password, dob, color, country, gender)
    // console.log(gender)
    // console.log(prog)
    let uData = {
        "username":username,
        "age":age,
        "email":email,
        "password":password,
        "dob":dob,
        "color":color,
        "country":country,
        "gender":gender,
        "prog":prog_final
    }
    // uData = JSON.stringify(uData)
    // console.log(uData)
    // console.log(JSON.parse(uData))
    localStorage.setItem('uData', JSON.stringify(uData))
}

function passwordManager() {
    let getType = document.getElementById("password")
    let show_btn = document.getElementById("show-btn")
    if (getType.value != "") {
        if (getType.type == "password") {
            getType.type = "text"
            show_btn.value = "Hide password"
        } else {
            getType.type = "password"
            show_btn.value = "Show password"
        }
    }
}
