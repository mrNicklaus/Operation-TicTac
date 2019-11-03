var x = 1;

while(x<=20){
    if(x%3 ===0 && x%5 ===0){
        console.log("TicTac");
    }else if(x%3 ===0){
        console.log("Tic")
    }else if(x%5 ===0){
        console.log("Tac");
    }else{
        console.log(x);
    }
x = x+1;
}


