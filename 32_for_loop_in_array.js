// for loop in  array 

let fruit =["apple","mango","grapes","banana"];
let fruit1=[];
// length proerty in an array 
console.log(fruit.length);
//console.log(fruit[0]);
console.log(fruit[fruit.length-1]);

for(let i=0;i<=fruit.length-1;i++){
    console.log(fruit[i]);
    fruit1.push(fruit[i]);



    console.log("in the upper case ")
    console.log(fruit[i].toUpperCase());

    console.log("to lower case ");
    console.log(fruit[i].toLowerCase());


}
console.log(fruit1);