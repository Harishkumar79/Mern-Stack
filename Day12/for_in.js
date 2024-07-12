// program of for_in loop
let arrObj = [
    {
        "fname":"harish"
    },
    {
        "fname":"chetan"
    },
    {
        "fname":"dilip"
    },
    {
        "fname":"deepak"
    }
]

for (const key in arrObj) {
    if (Object.hasOwnProperty.call(arrObj, key)) {
        const element = arrObj[key];
        console.log(element.fname);
    }
}