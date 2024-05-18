//Question 3:
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after stripping the white spaces.

let person_name :string = "\t \n Shumaila \t \n";          //Store person’s name, and include whiteSpace in beginning and end of the name. 

console.log(person_name);                                  //print with whiteSpace

console.log(person_name.trim());                           //Print the name after stripping the white spaces.

