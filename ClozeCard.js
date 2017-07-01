var inquirer = require("inquirer");

//Constructor Function
function ClozeCard(fullTxt,clozeTxt){
    this.fullTxt = fullTxt;
    this.clozeTxt = clozeTxt;
    var card = this;
    this.ask = function(){

        var full = this.fullTxt.split(" ")
        var cloze = this.clozeTxt.split(" ")
        
        var correct = 0;

        for (var i = 0; i < full.length; i++) {
            for (var j = 0; j < cloze.length; j++) {
                if (full[i].toLowerCase() === cloze[j].toLowerCase()){
                    //changes cloze words to ... and adds 1 to correct
                    full[i] = "..."
                    correct++

                }
            
            }
        //end of double for loop
    }
    
    //writes the message, taking commas out of array
    var message = full.toString();
    var newMessage = message.replace(/,/g, ' ');
   
        //throws an error if no cloze words found in full txt
        if (correct < 1) throw "CLOZE TEXT NOT PRESENT IN FULL TEXT"

            inquirer.prompt([

                {
                type: "input",
                message: newMessage,
                name: "answer"
            }

            ]).then(function(user) {

                if (user.answer.toLowerCase() === card.clozeTxt.toLowerCase()) console.log(card.clozeTxt+"... is the correct answer! Way to go!")
                //TODO ask another, ignore case when comparing
                else console.log("Wrong! The correct answer is "+card.clozeTxt)

            }).catch(function(err){

                console.log(err)

            });
    //end of ask function
    }
//end of ClozeCard Constructor
}

var firstPresident = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

firstPresident.ask();

