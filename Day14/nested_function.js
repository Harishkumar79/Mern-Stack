{
    function hello() {
        console.log("Hello world")
        how()
        // hello() create  infinte loop
        function how() {
            console.log("How are you?")
        }


    }
    hello()
}


{
    let counter = 0
    let time = setInterval(() => {
        console.log("Hello world", counter)
        counter++
        if (counter == 10) {
            clearInterval(time)
        }
    }, 1000)
}



{
    setTimeout(() => {
        console.log("Hello world 00")
    }, 1000)
}



{
    let hello = function () {
        console.log("Hello world 11")
    }
    setTimeout(hello, 1000)
}



{
    function hello() {
        console.log("Hello world 22")
    }

    setTimeout(hello, 1000)
}