// spread operator

const array1=[1,2,3];
const array2=[4,5,6];

const newArray=[...array1,...array2];
console.log(newArray);

// spread operstor in object 
const obj1={
    key1:"value1",
    key2:"value2",
};
const obj2={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4",
}
//console.log(obj1);
//const newObject={...obj1,...obj2};
const mynewArray={...["iteam1","iteam2"]};
console.log(mynewArray);
const newObject={..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObject);



 

