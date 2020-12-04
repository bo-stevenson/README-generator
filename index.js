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
        name: "test",
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
        let licenses = "";

        if (data.license === "MIT") {
            licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }

        if (data.license === "ISC") {
            licenses = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        }

        if (data.license === "GNU") {
            licenses = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
    
    let markdown = `# ${data.title}\n
## Overview
    ${data.description}\n
## Table of Contents\n
    1. [Installation](#installation)\n
    2. [Usage](#usage)\n
    3. [Contributions](#contribution)\n
    4. [Test Instructions](#test-instructions)\n
    5. [Screenshots](#screenshots)\n
    6. [Licenses](#licenses)\n
    7. [Questions + Contact Me](#questions)\n

## Installation\n
    ${data.installation}\n
## Useage\n
    ${data.usage}\n
## Contribution\n
    ${data.contribution}\n
## Test Instructions\n
    ${data.testInstructions}\n
## Screenshots\n
    Additional images of the code and product listed below.\n
    ![Screenshot]
## Licenses\n
    ${licenses}\n    
## Questions?\n
    My GitHub is [${data.github}](https://www.github.com/${data.github}).\n
    My email is [${data.email}](mailto:${data.email}).
  

  `;
    fs.writeFile(fileName, markdown, (error) =>
    error ? console.log("error") : console.log ("Success!"));
     });
}
    
    
   
    

// function to generate markdown for README
function generateMarkdown(data) {
    `# ${data.title}\n
## Overview
    ${data.description}\n
## Table of Contents\n
    1. [Installation](#installation)\n
    2. [Usage](#usage)\n
    3. [Contributions](#contribution)\n
    4. [Test Instructions](#test-instructions)\n
    5. [Screenshots](#screenshots)\n
    6. [Licenses](#licenses)\n
    7. [Questions + Contact Me](#questions)\n
## Licenses\n
    ${licenses}\n
## Installation\n
    ${data.installation}\n
## Useage\n
    ${data.usage}\n
## Contribution\n
    ${data.contribution}\n
## Test Instructions\n
    ${data.testInstructions}\n
## Screenshots\n
    Additional images of the code and product listed below.\n
    ![Screenshot]
## Questions?\n
    My GitHub is [${data.github}](https://www.github.com/${data.github}).\n
    My email is [${data.email}](mailto:${data.email}).
  

  `;
  }

  
  

// function call to initialize program
init();
