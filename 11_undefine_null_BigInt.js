// undefiine 

//variable mai value assign nhi krnge then fir undefine dega 
// in case var , let possible but not for constant 
let firstName;
console.log(firstName);
firstName="Antima";
console.log(typeof firstName,firstName);


// null 
let myVariable =null;
console.log(myVariable);
myVariable="Annu";
console.log(myVariable , typeof myVariable);


//Gives the object different type of data type 
//bug ,Error
console.log(typeof null);


// bigInt
let myNumber=123;
console.log(Number.MAX_SAFE_INTEGER);

let myNum=BigInt(1234367876768748937989374);
let mySameNum=12334335454656n;
console.log(myNum);
console.log(mySameNum);
console.log(myNum+mySameNum);