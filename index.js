const inquirer = require("inquirer");
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// function initApp() {
//     startHtml();
//     addMemeber();
// }
const promptUser = () => {
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
        }
    ]);
};

promptUser()
  .then(promptProject)
  .then(profileData => {
    return generatePage(profileData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });