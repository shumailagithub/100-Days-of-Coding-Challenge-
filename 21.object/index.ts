//Q:21.
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

import chalk from "chalk";


console.log(chalk.yellow("Object"));

type  Tstudent = {
    name:string
    roolNo:number
    subject:string
    insitute:string
} 
let student:Tstudent ={
    
    name : "Shumaila",
    roolNo: 24523,
    subject:"English",
    insitute: "GIAIC"

}

console.log(student);

