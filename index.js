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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
