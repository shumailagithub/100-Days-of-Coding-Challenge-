//Question 16: 
//More Guests: You've found a bigger dinner table, so there's room for more guests.
let guest_list = ["Salman", "Hadi", "Rayyan"]; ///List of three guest
console.log("Great news! I found a bigger dinner table!"); //print message to inform guest to we got a new bigger table for dinner and more speace for moreguest.
guest_list.push("Nazish"); //Addition of new guest in the end of Array
console.log(guest_list);
guest_list.splice(guest_list.length / 2, 0, "Nadia"); //Addition of new guest in the middle of Array
console.log(guest_list);
guest_list.unshift("Rubina"); //Addition of new guest in the beggning of Array
console.log(guest_list);
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, \t\n would you like to join us for dinner? .`); //Print all new and old guest with new invitation
});
export {};
