var inquirer = require("inquirer");

//Constructor Function
function BasicCard(front,back){
    this.front = front;
    this.back = back;
    var card = this;
    this.ask = function(){

            inquirer.prompt([

                {
                type: "input",
                message: front,
                name: "answer"
            }

            ]).then(function(user) {

                if (user.answer.toLowerCase() === card.back.toLowerCase()) console.log(card.back+"... is the correct answer! Way to go!")
                //TODO ask another, ignore case when comparing
                else console.log("Wrong! The correct answer is "+card.back)

            }).catch(function(err){

                console.log(err)

            });
    //end of ask function
    }
//end of BasicCard Constructor
}




var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

firstPresident.ask();

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");