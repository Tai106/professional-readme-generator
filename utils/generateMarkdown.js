// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license=="None") {
    return " "; }
return "https://img.shields.io/badge/License-"+license+"-blue.svg";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=="None") {
    return " "; }
return "https://opensource.org/licenses/"+license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license=="None") {
    return " "; }
    return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;