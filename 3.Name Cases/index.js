//Question 3: 
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "Asharib"; //store person name in variable
console.log(person_name.toLowerCase()); //print person name in lower case
console.log(person_name.toUpperCase()); //print person name in upper case
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()); //print person name in Title case
export {};
