//Question 15: 
//Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let guest_list : string[] = ["Salman", "Hadi", "Rayyan"];    ///List of three peoples

let unableToAttend :string = "Rayyan";
console.log(`${unableToAttend},can't make it to the dinner \t\n`);       //one guest can't make it to the dinner


let new_guest : string = "Tayyab";
guest_list[guest_list.indexOf(unableToAttend)] = new_guest ;         //Addition of new guest

guest_list.forEach(guest => {
    console.log(`Dear ${guest},\t\n would you like to join me for dinner?`);   //print list with the changes
    
})


