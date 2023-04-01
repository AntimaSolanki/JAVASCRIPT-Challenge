// nested if -else 
// Winning Game 

//19 your game is right 
// 17 is too low 
// 20 is to high 

let winningNumber=19;
let userGuees=+prompt("guess a number ");
//console.log(userGuees);
if(userGuees ===winningNumber){
    console.log("Your guess is right !");
}
else {
    if(userGuees <winningNumber){
        console.log("To low ");
    }
    else {
        console.log("To High");
    }
}