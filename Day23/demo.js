let movies = process.argv[2];
let likesmovie = true;

if (likesmovie){
    if(movies == "action"){
        console.log("Action Movies");
    }
    if(movies == "comedy"){
        console.log("Comedy Movies");
    }
    if(movies == "horror"){
        console.log("Horror Movies");
    }
    else{
        console.log("Add to genral category");
    }
}
else{
    console.log("person don't like movies");
}