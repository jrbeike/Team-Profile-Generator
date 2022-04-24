const inquirer = require("inquirer");
const genreatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require ('./utils/generate-site');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


