


for (i = 0; i <= 100; i++){
    let answer = "";
    if( i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " Fizzbuzz")
    }
}