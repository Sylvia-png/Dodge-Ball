'use strict';
const assert = require('assert');

let arrOfPeople =[
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

let listOfPlayers = []
let blueTeam = []
let redTeam = []

class Player {
    constructor (id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;  
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}

class BlueTeammate{
    constructor (id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;  
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}

class RedTeammate{
    constructor (id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;  
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}


const listPeopleChoices = () => {
    const listElements = document.getElementById('people')
    listElements.innerHTML = "";
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener("click", function() { makePlayer(person.id) } )
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + "-" + person.skillSet))
        listElements.append(li)
    })
}

const makePlayer = (id) => {
    console.log("li " + id + " was clicked!")
    // get values ​​from the person array of id: id
    const person = arrOfPeople.find(element => element.id === id);
    console.log(person);

    //create a new class player type object and assign the person values ​​+ additional player values
    const player = new Player(person.id, person.name, person.age, person.skillSet, person.placeBorn, true, true, true, true, 5);
    console.log(player);

    //remove person from people arrangemen
    let personIndex = arrOfPeople.findIndex(element => element.id === id);
    console.log(personIndex);
    arrOfPeople = arrOfPeople.filter(element => element.id !== id)
    console.log(arrOfPeople);

    // add new player to listOfPlayers array
    listOfPlayers.push(player);
    console.log(listOfPlayers);
   
    // refresh all lists
    refreshLists();
}

// function to display list of players: listAvailablePlayers
// similar a listPeopleChoices
const listAvailablePlayers = () =>{  
    const listPlayers = document.getElementById('players')
    listPlayers.innerHTML = "";
    listOfPlayers.map(players => {
        const li = document.createElement("li")
        const buttonBlue = document.createElement("button")
        buttonBlue.innerHTML = "Add to Blue Team"
        buttonBlue.addEventListener("click", function() { blueTeamMember(players.id) } )
        buttonBlue.className = "blueButton";
        li.appendChild(buttonBlue)
        const buttonRed = document.createElement("button")
        buttonRed.innerHTML = "Add to Red Team"
        buttonRed.addEventListener("click", function() { redTeamMember(players.id) } )
        buttonRed.className = "redButton";
        li.appendChild(buttonRed)
        li.appendChild(document.createTextNode(players.name + "-" + players.skillSet))
        listPlayers.append(li)
    })
}





// function to add player to team red

const redTeamMember = (id) => {
    console.log("li " + id + " was clicked!")
    // get players array values ​​from id: id
    const player = listOfPlayers.find(element => element.id === id);
    console.log(player);

    //create a new object of type class redTeam or blueTeam and assign it the person values ​​+ additional player values
    const teamMember = new RedTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, "eagle", "red");
    console.log(teamMember);

    // remove person from people arrangement
    let playerIndex = listOfPlayers.findIndex(element => element.id === id);
    console.log(playerIndex);
    listOfPlayers = listOfPlayers.filter(element => element.id !== id)
    console.log(listOfPlayers);

    // add new player to redTeammate array
    redTeam.push(teamMember);
    console.log(redTeam);

    // refresh all lists
    refreshLists();
}


// function to add player to team blue

const blueTeamMember = (id) => {
    console.log("li " + id + " was clicked!")
    // get players array values ​​from id: id
    const player = listOfPlayers.find(element => element.id === id);
    console.log(player);

    //create a new object of type class redTeam or blueTeam and assign it the person values ​​+ additional player values
    const teamMember = new BlueTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, "wolf", "blue");
    console.log(teamMember);

    // remove person from people arrangement
    let playerIndex = listOfPlayers.findIndex(element => element.id === id);
    console.log(playerIndex);
    listOfPlayers = listOfPlayers.filter(element => element.id !== id)
    console.log(listOfPlayers);

    // add new player to blueTeammate array
    blueTeam.push(teamMember);
    console.log(blueTeam);

    // refresh all lists
    refreshLists();
}

// function to display equipment list: listBlueTeamMembers
    // similar a listPeopleChoices
const listBlueTeamMembers = () =>{  
    const redTeamMembersList = document.getElementById('blue')
    redTeamMembersList.innerHTML = "";
    blueTeam.map(member => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(member.name + "-" + member.skillSet))
        redTeamMembersList.append(li)
    })
}

//function to display equipment list: listRedTeamMembers
    // similar a listPeopleChoices
const listRedTeamMembers = () =>{  
    const redTeamMembersList = document.getElementById('red')
    redTeamMembersList.innerHTML = "";
    redTeam.map(member => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(member.name + "-" + member.skillSet))
        redTeamMembersList.append(li)
    })
}


function refreshLists() {
    listPeopleChoices();
    listAvailablePlayers();
    listBlueTeamMembers();
    listRedTeamMembers();
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C

if (typeof describe === 'function') {

    describe('Player', function(){
        it('should have yearsOfExperience 5', function(){
            const person = arrOfPeople.find(element => element.id === 2);
            const player = new Player(person.id, person.name, person.age, person.skillSet, person.placeBorn, true, true, true, true, 5);
            assert.equal(player.yearsExperience, 5);
        });
    });

    describe('BlueTeam', function(){
        it('should have mascot wolf', function(){
            const person = arrOfPeople.find(element => element.id === 2);
            const player = new Player(person.id, person.name, person.age, person.skillSet, person.placeBorn, true, true, true, true, 5);
            const teamMember = new BlueTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, "wolf", "blue");
            assert.equal(teamMember.mascot, 'wolf');
        });
    });

    describe('RedTeam', function(){
        it('should have teamColor red', function(){
            const person = arrOfPeople.find(element => element.id === 2);
            const player = new Player(person.id, person.name, person.age, person.skillSet, person.placeBorn, true, true, true, true, 5);
            const teamMember = new RedTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, "eagle", "red");
            assert.equal(teamMember.teamColor, 'red');
        });
    });

} else {
    getPrompt();
}



