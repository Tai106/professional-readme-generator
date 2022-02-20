// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    // Description of project 
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Provide a project description!');
                return false;
            }
        } 
     },
     // Installation Instructions
     {
         type: 'Input',
         name: 'installation',
         message: 'How do you install your project? (Required)',
         validate: installationInput => {
             if (installationInput) {
                 return true;
             } else {
                 console.log('Provide installation info to continue!');
                 return false;
             }
         }
     },
// Usage Information
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project? (Required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Provide information on how to use projects!');
            return false;
        }
    }
},
]
// Contribution Guidlines
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();