//let score = 33; //This is a Number
//let score = "33abc";//This is a String
// let score = null;
// let score = undefined;
// let score = true;
//let score = "Govind";//This cannot be convert to number because this is a string which is NaN

//console.log(typeof score);
//console.log(typeof(score)); 

//let valueInNumber = Number(score); // This string score is converted to number We want to work with Numbers only

//console.log(typeof valueInNumber);
//console.log(valueInNumber);//This NaN not a number


//console.log(typeof(NaN));//type of NaN is also a Number

//"33" => 33
//"3abc" => NaN
// true => 1; false =>0;


// 1.null is a primitive value in JavaScript, not an object.
// 2.typeof null returns "object", which is a known bug and a historical artifact.
// 3.null represents the intentional absence of any object value, whereas undefined represents an uninitialized or non-existent variable.

// let isLoggedIn = "Govind";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1=>true; 0 => false
//"" => false; "Govind" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);