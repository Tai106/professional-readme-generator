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
// Contribution Guidlines
{
    type: 'input',
    name: 'contribution',
    message: 'How should people contribute to this project? (Required)',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Provide information on how to contribute to the project!');
            return false;
        }
    }
},
// Test Instructions
{
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? (Required)',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('Describe how to test this project!');
            return false;
        }
    }
},
// License options
{
    type: 'checkbox',
    name: 'licensing',
    message: 'Choose a license for your project (Required)',
    choices: ['MIT', 'GPL-license', 'LGPL-license', 'MPL-2.0', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'None'],
    validate: licensingInput => {
        if (licensingInput) {
            return true;
        } else {
            console.log('Pick a license for the project!');
        }
    }
},
// Github Username
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},
// Email Address
{
    type: 'input',
    name: 'email',
    message: 'Would you like to incluse your email?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your Markdown file has been created.')
    });
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers)
        );
      });
    }



// Function call to initialize app
init();