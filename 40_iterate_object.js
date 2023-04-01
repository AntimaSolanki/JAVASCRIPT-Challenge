// How to iterate object 

const person=
{
    name:"Antima",
    age:"20",
    "person hobbies":["guitar","sleeping" ,"dancing"]
 
}
// for in loop 

// Object.keys

//for(let key in person  ){
//    console.log(person[key]);
//    console.log(key,person[key]);
//}

console.log(typeof(Object.keys(person)));
Array.isArray((Object.keys(person)));
