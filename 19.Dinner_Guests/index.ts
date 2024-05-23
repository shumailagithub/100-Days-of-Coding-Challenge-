import chalk from "chalk";
//Dinner Guests: 
//Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

let guest_list : string[] = ["Salman", "Hadi", "Rayyan"];    ///List of three peoples

guest_list.forEach(geust => {
    console.log(`Dear, ${geust}  would you like to join me for the dinner today ? `);             //Print message with the each person
    
})

console.log(chalk.red.bold(`${guest_list.length} :number of people we are inviting to dinner.`))                //length will print the number of peoples


