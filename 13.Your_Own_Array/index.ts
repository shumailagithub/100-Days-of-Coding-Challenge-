//Question 13: 
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favorite_transports :string[] = ["car", "motorcycle", "air Plain", "boat", "bicycle", "Honda motorcycle"]    //List of Transports


//------------------------------use of for Loop-------------------------------------------
for(let transport of favorite_transports) {
    console.log(`I would like to own a, ${transport}`);                                        //Print message with each transport with the help of "For Loop"
    

}

//-------------------------------use of forEach Loop-------------------------------------
favorite_transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);                                       //Print message with each transport with the help of "forEach Loop"
});