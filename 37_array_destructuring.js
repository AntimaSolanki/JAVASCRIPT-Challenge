// array destructuring 


const myArray=["value1","value2"];
//let myvar1=myArray[0];
//let myvar2=myArray[1];
//console.log("value of my var 1",myvar1);
//console.log("value of my var 2", myvar2);
//console.log("value of my Array ",myArray);

//SHORTCUT OF Upper wale k liye 

let[myvar1,myvar2,myvar3,...myNewArray]=myArray;
//let myNewArray=myArray.slice(1);
//myvar1="value changed";
console.log("value of my var1", myvar1);
console.log("value of my var 2",myvar2);
console.log("vale of my var 3 ", myvar3);
console.log(myNewArray);
