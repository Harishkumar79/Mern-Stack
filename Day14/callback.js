function age_verification(age){
    if(age>18){
        return "Adult"
    }else{
        return "Child"
    }
}

function details(fname , lname , age, age_verification){
    let isAdult = age_verification(age)

    return `First Name : ${fname} ,\nLast Name : ${lname} ,\nStatus : ${isAdult}`
}

console.log(details("harish","sen", 20 , age_verification ))

