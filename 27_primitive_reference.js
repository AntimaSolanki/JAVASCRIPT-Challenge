// primitive v/s reference data type 


//PRIMITIVE DATA TYPE 
let num1= 6;
let num2=num1;
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);


// REFENENCE DATA TYPE 
// array are the refernce type 

let array1=["iteam1","iteam2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("iteam3");
console.log("After pushing elemnt in array");
console.log("array1",array1);
console.log("array2",array2);
