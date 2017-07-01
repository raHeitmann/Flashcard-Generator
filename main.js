//main file for cloze/basic card constructors

var inquirer = require ('inquirer');

  inquirer.prompt([

        {
        type: "list",
        message: "Would you like a basic card or a cloze card?",
        choices: ["Basic Card", "Cloze Card"],
        name: "choice"
    }

    ]).then(function(user) {

        if (user.choice === "Basic Card"){

            const basic = require('./basiccard.js');  
        }
        else if (user.choice === "Cloze Card"){
            
            const cloze = require('./clozecard.js');

        }

    });