// Q No 42.
// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let Magician : string[] =["Harry Potter", "Hermione Granger","Ron Weasley","Albus Dumledore"];

function make_great(Magician_arrray :string[]){
for (let i = 0; i < Magician_arrray.length; i++) {
    Magician[i] = 'the Great ' + Magician_arrray[i]
    
}
}

function show_magicians(Magician :string[]){
 Magician.forEach(element => {
    console.log(element);
    
 });
}

make_great(Magician)
show_magicians(Magician)