console.log("hey")

let shotsTakenTeamOne = document.querySelector("#teamone-numshots");
let goalsTeamOne = document.querySelector("#teamone-numgoals");
let teamoneShootButton = document.querySelector("#teamone-shoot-button");

teamoneShootButton.addEventListener("click", function () {
    let teamoneGoalsScored = Number(shotsTakenTeamOne.innerHTML) + 1;
    shotsTakenTeamOne.innerHTML = teamoneGoalsScored;
    if (Math.random() * 100 < 30) {
        let teamoneGoalsScored= Number(goalsTeamOne.innerHTML) + 1;
        goalsTeamOne.innerHTML = teamoneGoalsScored;
    }
});

let shotsTakenTeamTwo = document.querySelector("#teamtwo-numshots");
let goalsTeamTwo= document.querySelector("#teamtwo-numgoals");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

teamTwoShootButton.addEventListener("click", function () {
    let teamTwoGoalsScored = Number(shotsTakenTeamTwo.innerHTML) + 1;
    shotsTakenTeamTwo.innerHTML = teamTwoGoalsScored ;

    if (Math.random() * 100 < 45) {
        let teamTwoGoalsScored  = Number(goalsTeamTwo.innerHTML) + 1;
        goalsTeamTwo.innerHTML = teamTwoGoalsScored ;
    }
});


let resetButton = document.querySelector ("#reset-button");
let numberOfReset = document.querySelector("#num-resets");

resetButton.addEventListener("click", function (){
    let reset = Number (numberOfReset.innerHTML) + 1;
    numberOfReset.innerHTML = reset;
    shotsTakenTeamOne.innerHTML = 0;
    shotsTakenTeamTwo.innerHTML = 0;
    goalsTeamOne.innerHTML = 0;
    goalsTeamTwo.innerHTML = 0;


    console.log("resetButton");

});






