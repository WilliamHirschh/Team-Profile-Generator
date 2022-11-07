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
    ])}
  
