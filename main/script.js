let randomArray = [];

function randomNum(){
    // Generate array of random numbers between 1-50
    while(randomArray.length <= 6){
        let random = Math.floor(Math.random() * 50) + 1; 
        randomArray.push(random);
    }
    console.log(randomArray);  
}

DocumenrandomNum()
