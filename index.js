const inquirer = require("inquirer");

const fs = require("fs");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What would you like the title to be?",
        name: "title",
    },

    {
        type: "input",
        message: "Describe the project",
        name: "description",
    },

    {
        type: "input",
        message: "Provide instructions on how to install it",
        name: "installation",
    },

    {
        type: "input",
        message: "Provide brief explanation on usage",
        name: "usage",
    },


    {
        type: "input",
        message: "Enter Contribution guidelines: ",
        name: "contribution",
    },

    {
        type: "input",
        message: "Test Instructions: ",
        name: "testIns",
    },

    {
        type: "list",
        message: "Select a License:",
        name: "license",
        choices: ["MIT", "ISC", "GNU"],
    },

    {
        type: "input",
        message: "Enter GitHub name:",
        name: "github",
    },

    {
        type: "input",
        message: "Enter email address:",
        name: "email",
    },
];

// function to initialize program
function init() {
    
    inquirer.prompt(questions).then(data => {
        let fileName = "README.md";
        let license = "";

        if (data.license === "MIT") {
            license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }

        if (data.license === "ISC") {
            license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        }

        if (data.license === "GNU") {
            license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
//creates markdown for the README file.
let markdownGen = `# ${data.title}\n
## Overview
${data.description}\n
## Table of Contents\n
1. [Installation](#installation)\n
2. [Usage](#usage)\n
3. [Contributions](#contribution)\n
4. [Test Instructions](#test-instructions)\n
5. [Screenshots](#screenshots)\n
6. [Licenses](#licenses)\n
7. [Questions](#questions)\n

## Installation\n
 ${data.installation}\n
## Usage\n
${data.usage}\n
## Contribution\n
${data.contribution}\n
## Test Instructions\n
${data.testIns}\n
## Screenshots\n
![Screenshot](assets/images/screenshot.png)
## License\n
${license}\n    
## Questions? Contact Me!\n
My GitHub is [${data.github}](https://www.github.com/${data.github}).\n
My email is [${data.email}](mailto:${data.email}).
`;
//Writes the README file and catches errors. 
    fs.writeFile(fileName, markdownGen, (error) =>
    error ? console.log("Uh oh something went wrong...") : console.log ("Success! README written!"));
     });
}
    

// function call to initialize program
init();
