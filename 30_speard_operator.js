// speard operator

let array1=["item1","item2"];
let array2=[...array1];
array1.push("item3");

console.log("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);



let array3=["item3","item4"];
let oneMoreArray=["item5","item6"];
let array4=[...array3,...array1.onrMoreArray];
array3.push("item3");
console.log(array3===array4);
console.log(array3);


  