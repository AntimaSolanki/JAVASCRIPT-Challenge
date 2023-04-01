// for in loop 

const fruits=["apple","banana","mango"];
const fruits2=[];

for(let index in fruits){
    //console.log(index);
   // console.log(fruits[index]);
   fruits2.push(fruits[index]);
}
console.log(fruits2);