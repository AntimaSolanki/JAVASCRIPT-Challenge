// objects
//array are good but not sufficent 
// for real world data 
// object don't have index 

// how to create an array 
//const person ={name: "Antima",age:19};
//console.log(typeof person);

/*NOTE *** KEYS KOSQURE BRACKTS MAI BHI LIKH SAKTE HAI */
const person={
    name:"Antima",
    age:22,
    hobbies:["cooking","danceing","singging "]

}
console.log(person);


// how to access data fro  objects 
console.log(person["name"]);
//console.log(person.name);
//console.log(person.age);

console.log(person.hobbies);


// how to add key value pair to object 
person.gender="male";
console.log(person);