"use strict";
// Q No 41.
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let Magician = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumledore"];
function show_Magicians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_Magicians(Magician);
