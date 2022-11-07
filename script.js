const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./Employees/manager');
const Intern = require('./Employees/intern');
const Engineer = require('./Employees/engineer');

teamArray = [];
inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the team managers name?',
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'What is the employee ID?',
      name: 'employeeID',
    },
    {
      type: 'input',
      message: 'What is the email address?',
      name: 'emailAddress',
    },
    {
        type: 'input',
        message: 'What is the office number?',
        name: 'officeNumber',
      },
      {
        type: 'input',
        message: 'What is your GitHub URL',
        name: 'github',
      },
      {
        type: 'list',
        name: 'morePeople',
        message: 'Would you like to add more people?',
        choices: ['Yes', 'No']
      },
    ]).then(function (userInput) {
        switch(userInput.morePeople) {
            case "Yes":
            selectOption();
            break;
            case "No":
            break;
        }
    })
// Select Engineer or a Intern
    function selectOption() {
    inquirer
    .prompt ([
      {
        type: 'list',
        name: 'MorI',
        message: 'Would you like to add a engineer or intern?',
        choices: ['Engineer', 'Intern']
      },
    ]).then(function (userInput) {
    switch(userInput.MorI) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
    }
  })
    }



  //add engineer
  function addEngineer() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'EngineerName',
            message: 'What is the Engineers name?',
        },
        {
            type: 'input',
            name: 'EngineerId',
            message: 'What is the Engineers ID?',
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message: 'What is the Engineers email?',
        },
        {
            type: 'input',
            name: 'EngineerGitHub',
            message: 'What is the Engineers GitHub?',
        },
    ])
  }
    

  // Add Intern
  function addIntern() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'InternName',
            message: 'What is the Interns name?',
        },
        {
            type: 'input',
            name: 'InternId',
            message: 'What is the Interns ID?',
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: 'What is the Interns email?'
        },
        {
            type: 'input',
            name: 'InternSchool',
            message: 'Where does the Intern go to school?',
        }
    ]).then((answers) => {
        const html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            <header class="header">Team Profile</header>
        
            <div class="ManagerDiv">
                <h1 class="ManagerName">${answers.managerName}</h1>
                <h2 class="ManagerID">ID: ${answers.employeeID}</h2>
                <a href="mailto: ${answers.emailAddress}" class="ManagerEmail">Email</a>
                <h4 class="ManagerOfficeNumber">Office #${answers.officeNumber}:</h4>
                <a href="github.com/${answers.github}" class="ManagersGitHub">GitHub</a>
            </div>
        
            <div class="EngineerDiv">
                <h1 class="EngineerName">${answers.EngineerName}</h1>
                <h2 class="EngineerID">ID: ${answers.EngineerId}</h2>
                <a href="mailto: ${answers.EngineerEmail}" class="EngineerEmail">Email</a>
                <a href="${answers.EngineerGitHub}" class="EngineerGitHub">GitHub</a>
            </div>
        
            <div class="InternDiv">
                <h1 class="InternName">${answers.InternName}</h1>
                <h2 class="InternID">ID: ${answers.InternId}</h2>
                <a href="mailto: ${answers.InternEmail}" class="InternEmail">Email</a>
                <h3 class="InternSchool">School: ${answers.InternSchool} </h3>
            </div>
        </body>
        </html>`
        fs.writeFile('index.html', html, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
    });}
    
  
