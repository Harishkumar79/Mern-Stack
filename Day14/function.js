{
    //standalone funcion

    function add() {
        let a = 10, b = 20;
        console.log(a + b)
    }

    add();
}


{
    function add(a, b) {
        console.log(a + b)
    }

    add(10, 20)
    add(40, 50)
}

{
    function hello(name) {
        console.log("hello", name)
    }

    hello("harish")
    hello("nikul")
}

{
    let a = 10
    console.log(a)
}




{
    function add_return(a, b) {
        return a + b;
    }
    function add(a, b) {
        console.log(a + b)
    }

    let opn1 = add_return(2, 3)
    let opn2 = add(2, 3)

    console.log(opn1)
    console.log(opn2)
    console.log(add(2, 3))
}

{
    let add = function (a, b) {
        return a + b
    }
    let sum = add
    console.log(sum(20, 20))
}
{
    let add = (a, b) => {
        return a + b
    }

    let sum = add
    console.log(sum(20, 30))
}