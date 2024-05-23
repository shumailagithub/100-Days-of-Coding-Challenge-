import chalk from "chalk";
//Question 18: 
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//• ---------Store the locations in a array,not in  alphabetical.order.
let locations = ["Canada", "Australia", "Egypt", "Germany", "China"];
//• Print your array in its original order.
console.log(chalk.red.bold("Original"));
console.log(locations);
//• Print your array in alphabetical order without modifying the actual list.
console.log(chalk.red.bold("alphabetical order,Copy"));
console.log([...locations].sort());
//• Show that your array is still in its original order by printing it.
console.log("Original");
console.log(locations);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(chalk.red.bold.italic("reverse order,Copy"));
console.log([...locations].sort().reverse());
console.log(locations);
//• Show that your array is still in its original order by printing it again.
console.log(chalk.red.bold.italic("Original"));
console.log(locations);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(chalk.red.bold.italic("reverse order,showing changes "));
console.log(locations.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(chalk.red.bold.italic("Original"));
console.log(locations.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(chalk.red.bold.italic("Original"));
console.log(locations.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(chalk.red.bold.italic("Original"));
console.log(locations.sort().reverse());
