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
        message: "Any contributions to note?",
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

// function to write README file
function writeToFile(fileName, data) {
}

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
    })
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;
  

// function call to initialize program
init();
