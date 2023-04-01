//differnce b/w dot and bracket notation 

//1) isme hame strings mai koi bada name lete hai then ham 
// bracket notation use kr skate hai 


const key="email";
const person={
    name:"Antima",
    age:"20",
    "person hobbies":["guitar","sleeping","dancing"],


}
console.log(person["person hobbies"]);
person[key]="Antima2002jan@gmail.com";
console.log(person);

