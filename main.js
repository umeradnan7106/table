#! /usr/bin/env node
import inquirer from "inquirer";
let tableNo = await inquirer.prompt({
    name: "tnumber",
    message: "Enter the table Number: ",
    type: "number",
});
for (let i = 1; i <= 12; i++) {
    let answer = tableNo.tnumber * i;
    let output = `${tableNo.tnumber} x ${i} = ${answer}`;
    console.log(output);
}
