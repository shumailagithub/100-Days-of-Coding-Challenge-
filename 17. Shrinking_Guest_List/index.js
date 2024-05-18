//Question 17: 
//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guest_list = ["Salman", "Hadi", "Rayyan"]; ///List of three guest
console.log("Unfortunately, I can only invite two people for dinner.\t\n");
while (guest_list.length > 2) {
    let removedGuest = guest_list.pop(); // From last removing one guest from the length of Array
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.\t\n `);
}
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to the dinner.\t\n`); //print new list with removing one guest
});
guest_list.splice(0, guest_list.length);
console.log(guest_list); //print empty Array
export {};
// let guests : string[] = ["Salman", "Hadi", "Rayyan"];    ///List of three guest
// console.log("Unfortunately, I can only invite two people for dinner.");
// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
// guests.splice(0, guests.length);
// console.log(guests); // Shows an empty list
