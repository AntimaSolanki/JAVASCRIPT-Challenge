// how to clone 




// how to concatenate two array 

let array1=["item1","item2"];
//let array2=array1;-->> true
//let array2=["item1","item2"]; -->> false 

let array2=array1.slice(0);
array1.push("iteam3");

console.log(array1===array2);
console.log(array1);
console.log(array2);