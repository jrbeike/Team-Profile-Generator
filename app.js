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
            message: 'Enter Team Memebers Name',
            name: 'name',
        },
        {
            type: 'list',
            message: 'select team members role',
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ],
            name: 'role'    
        },
        {
            message: 'Enter Team memebers id',
            name: 'id'
        },
        {
            message: 'Enter members email address',
            name: 'email'
        }])
}