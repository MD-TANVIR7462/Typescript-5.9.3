//* implicit data type  - typescript will automatically take the type to string.
const firstName = "Tanvir";
//* explicit data type  - define typescript data type.
const lastName = "Evan";
//* Number data type .
const roll = 12;
//* boolean data type .
const isAdmin = true;
//* undefined data type 
const isDefined = undefined;
//* null data type 
const isNull = undefined;
//* any data type  - any type of data defined
const anything = 12;
// ? arrays with defined data types
const arr1 = ["tanvir", "evan", "noor", "alifa"];
// arr1.push(12) //?it will not allowed by typescript
arr1.push("Rivnat");
const coOrdinates = ["tanvir", 12, "evan"];
export {};
