let a = 80,
    b = 70,
    c = 120,
    d = 90,
    e = 100

if(a>b) {
    if(a>c) {
        if(a>d) {
            if(a>e) {
                console.log("A is greater")
            } else {
                console.log("E is greater")
            }
        } else if(d>e){
            console.log("D is greater")
        } else {
            console.log("E is greater")
        }
    } else if(c>d) {
        console.log("C is greater")
    } else if(d>e){
        console.log("D is greater")
    } else {
        console.log("E is greater")
    }
} else if (b>a) {
    if(b>c) {
        if(b>d) {
            if(b>e) {
                console.log("B is greater")
            } else {
                console.log("E is greater")
            }
        } else if(d>e){
            console.log("D is greater")
        } else {
            console.log("E is greater")
        }
    } else if(c>d) {
        console.log("C is greater")
    } else if(d>e){
        console.log("D is greater")
    } else {
        console.log("E is greater")
    }
} else if(c>a){
    if(c>b) {
        if(c>d) {
            if(c>e) {
                console.log("C is greater")
            } else {
                console.log("E is greater")
            }
        } else if(d>e){
            console.log("D is greater")
        } else {
            console.log("E is greater")
        }
    } else if(b>d) {
        console.log("B is greater")
    } else if(d>e){
        console.log("D is greater")
    } else {
        console.log("E is greater")
    }
} else if(d>e){
    console.log("D is greater")
} else {
    console.log("E is greater")
}