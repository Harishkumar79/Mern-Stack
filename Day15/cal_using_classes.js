class Calculator {
    constructor(a, b, op) {
        this.a = a
        this.b = b
        this.op = op
        this.operands = {
            "+": function () {
                return a + b
            },
            "-": function () {
                return a - b
            },
            "/": function () {
                return a / b
            },
            "*": function () {
                return a * b
            },
            "log":function() {
                return `${a} -> ${Math.log(a)}\n${b} -> ${Math.log(b)}`
            },
            "sqrt":function() {
                return `${a} -> ${Math.sqrt(a)}\n${b} -> ${Math.sqrt(b)}`
            }
        }
    }

    calculation() {
        let keys = Object.keys(this.operands)
        let op;
        keys.map(k => {
            if (k == this.op) {
                // console.log(k)
                let output = this.operands[k]
                op = output()
            }
        })

        return op
    }
}

let instance1 = new Calculator(100, 4, 'sqrt')

let output = instance1.calculation()

console.log(output)