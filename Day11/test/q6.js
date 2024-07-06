// Write a JS program to input any character and check whether it is alphabet, digit or special character. 

let char = "1";

if(char == "a" ||char == "b"||char == "c"||char == "d"||char == "e"||char == "f"||char == "g"||char == "h"||char == "i"||char == "j"||char == "k"||char == "l"||char == "m"||char == "n"||char == "o"||char == "p"||char == "q"||char == "r"||char == "s"||char == "t"||char == "u"||char == "v"||char == "w"||char == "x"||char == "y"||char == "z" || char == "A" ||char == "B"||char == "C"||char == "D"||char == "E"||char == "F"||char == "G"||char == "H"||char == "I"||char == "J"||char == "K"||char == "L"||char == "M"||char == "N"||char == "O"||char == "P"||char == "Q"||char == "R"||char == "S"||char == "T"||char == "U"||char == "V"||char == "W"||char == "X"||char == "Y"||char == "Z"){
    console.log("Character is an alphabate");
}else if(char == 0 || char == 1 || char == 2 || char == 3 || char == 4 || char == 5 || char == 6 || char == 7 || char == 8 || char == 9){
    console.log("Character is an Number");
}else{
    console.log("Character is a special character");
}