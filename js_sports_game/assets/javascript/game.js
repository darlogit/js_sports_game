console.log("hey")

let shotsTakenTeamOne = document.querySelector("#teamone-numshots");
let goalsTeamOne = document.querySelector("#teamone-numgoals");
let teamoneShootButton = document.querySelector("#teamone-shoot-button");

teamoneShootButton.addEventListener("click", function () {
    let myNewCounterValue = Number(shotsTakenTeamOne.innerHTML) + 1;
    shotsTakenTeamOne.innerHTML = myNewCounterValue;
    if (Math.random() * 100 < 30) {
        let scoreGoals = Number(goalsTeamOne.innerHTML) + 1;
        goalsTeamOne.innerHTML = scoreGoals;
    }
});
let shotsTakenTeamTwo = document.querySelector("#teamtwo-numshots");
let goalsTeamTwo = document.querySelector("#teamtwo-numgoals");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

teamTwoShootButton.addEventListener("click", function () {
    let meTeamTwoScale = Number(shotsTakenTeamTwo.innerHTML) + 1;
    shotsTakenTeamTwo.innerHTML = meTeamTwoScale;

    if (Math.random() * 100 < 45) {
        let meTeamTwoScale = Number(goalsTeamTwo.innerHTML) + 1;
        goalsTeamTwo.innerHTML = meTeamTwoScale;
    }
});

let resetButton = document.querySelector("#reset-button");
let numberOfResets = document.querySelector("num-resets");

resetButton.addEventListener("click", function () {
    let resets = Number(numberOfResets.innerHTML) + 1;
    numberOfResets.innerHTML = resets;
    let myNewCounterValue = 0;
    shotsTakenTeamOne.innerHTML = 0;
    let shotsTakenTeamTwo = 0;
    shotsTakenTeamTwo.innerHTML = 0;
    let scoreGoals = 0;
    goalsTeamOne.innerHTML = 0;
    let meTeamTwoScale = 0;
    goalsTeamTwo.innerHTML = 0;


});
//
