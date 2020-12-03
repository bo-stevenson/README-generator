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
        message: ""
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
