// Write a JS Program to input electricity unit charges and calculate total electricity bill according to the given
// condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


let unit = 400;

        if(unit<=50){
            totalBill=unit*0.50;
           let bill=totalBill;
            console.log(bill);
        }else if(unit<=150){
            totalBill=(50*0.50) + (unit-50)*0.75;
            let bill=totalBill
            console.log(bill);
        }else if(unit<=250){
            totalBill=(50*0.50)+(100*0.75)+ (unit-150)*1.20
            let bill=totalBill
            console.log(bill);
        } else if(unit>250){
            totalBill=(50*0.50)+(100*0.75)+(150*1.20)+ (unit-250)*1.50
            let bill=totalBill*0.2;
            console.log(bill);
        }else{
            console.log("Invalid Input");
        }