// while loop in array 

const fruits=["apple","mango","banana"];
const fruits1=[];
let i=0;
while(i<fruits.length){
    fruits1.push(fruits[i].toUpperCase());
    //console.log(fruits[i]);
    i++;
}
console.log(fruits1);