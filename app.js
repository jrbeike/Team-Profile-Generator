const inquirer = require("inquirer");
const genreatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function initApp() {
    startHtml();
    addMemeber();
}
const promtUser = () => {
    return inquirer.prompt([
        {
            message: "Enter Team Memebers Name",
            name: "name",
        },
        {
            
        }
    ])
}