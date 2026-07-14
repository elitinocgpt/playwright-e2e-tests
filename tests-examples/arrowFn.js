/**
 * Arrow Function - Using FAT ARROW  
 * SYNTAX:      ()=>{}
 *@Scenarios
 *1. Convert Normal function into arrow function
 *2. No Param
 *3. Single Parameter - Ways to write: With () and Without ()
 *4. More than 1 param - Ways to implement: Single and more than 1 statement
 *5. foreach() method
 */

/* function addNum(num1, num2){
    let sum=num1+num2;
    return sum
}

console.log(addNum(3,6));

//Converting normal above function into - Arrow Function with parameter - More than 1 statement
let sum = (num1, num2)=>{
    let sum=num1+num2;
    return sum;
}; 

console.log(sum(9,6));
*/

//Converting normal above function into - Arrow Function with parameter -  1 statement

let sum = (num1, num2) => num1 + num2;
console.log('...Arrow Function with parameter -  1 statement...');
let total = sum(10, 5);
console.log(total);

//No Param in function
let arrfn = () => 10 > 5;
console.log('...No Param...');
console.log(arrfn()); //will return boolean true as above function is used as condition

//Single arrow function with paranthesis in function
console.log('...Single Param - with Paranthesis...');
let greet = (name) => console.log(`Hello,${name}`);
greet('San');

//Single arrow function without paranthesis '()' when 1 parameter
console.log('...Single Param - No Paranthesis...');
let greet2 = (name2) => console.log(`Hello,${name2}`);
greet2('RadheShyam');

//forEach()   ()=>{}
let windows = ['Google', 'Youtube', 'Amazon'];
windows.forEach((val, index, arr) => {
  console.log(val);
  console.log(index);
  console.log(arr);
});
