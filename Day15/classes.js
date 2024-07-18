class myClass {

    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    myFunc() {
        return `Hello, ${this.fname} ${this.lname}!`
    }
}

let myObj = new myClass("Hk", "sen")
let myObj2 = new myClass("Shri Narendra", "Modi")

console.log(myObj.myFunc())
console.log(myObj2.myFunc())
