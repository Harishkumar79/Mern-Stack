// program of for loop
let numbers = {
    "odd":[],
    "even":[]
}

let even = [] , odd = []
for(let i =0; i<=50 ;i++){
    if(i%2 == 0){
        even = [...even,i]
    }else{
        odd = [...odd , i]
    }
}

numbers['even'] = [...numbers['even'], ...even]
numbers['odd'] = [...numbers['odd'], ...odd]

console.log(numbers);