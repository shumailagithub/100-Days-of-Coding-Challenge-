//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//• Tests using "and" and "or" operators
//------------------Tests for equality-------------------------
console.log("Shumaila" === "Shumaila"); //true
//-----------------Tests for inequality------------------------
console.log("Shumaila" === "Shalom"); //false
//--------------- Tests using the lower case function----------------------
console.log("Shumaila".toLowerCase() === "shumaila"); //true
//-------------Numerical tests involving equality and inequality---------------
console.log(25 === 25); //true
//------------------Tests for inequality-------------------------
console.log(45 !== 45); //false
//------------------greater than---------------------------------
console.log(100 > 80); //true
//------------------less than---------------------------------
console.log(100 < 80); //false
//-----------------greater than or equal to-------------------
console.log(100 >= 100); //true
//--------------less than or equal to-------------------------
console.log(100 <= 90); //false
//-----------------Tests using "and" && operators-------------
console.log("Salman" === "Salman" && 25 === 25); //true
//----------------Tests using "or" || operators---------------
console.log("Hadi" === "Abishay" || "Rayyan" === "Rahman"); //false  
//---------- Test whether an item is in a array---------------
let friend = ["Nazish", "Asma", "Ameera", "Ayesha"];
console.log(friend.includes("Nazish") === true); //true
//--------------Test whether an item is not in a array--------
console.log(friend.includes("Sara") === true); //false
//--------------Tests using "and" && operators----------------
console.log(10 > 9 && 9 < 10); //true
//-------------Tests using "or" operators---------------------
console.log("Apple" === "Grapes" || 100 === 110);
export {};
