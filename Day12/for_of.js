// program of for_of loop
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

for (const i of arrObj) {
    console.log("fname -->" , i.fname)
}