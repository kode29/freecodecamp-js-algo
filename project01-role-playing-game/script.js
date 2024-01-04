let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
    
}

function goTown(){
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    button1.innerText = "Go to store";
    button1.onclick = goStore;
    button2.innerText = "Go to cave";
    button2.onclick = goCave;
    button3.innerText = "Fight dragon";
    button3.onclick = fightDragon;
}
function goStore(){
    text.innerText = "You enter the store.";
    button1.innerText = "Buy 10 health (10 gold)";
    button1.onclick = buyHealth;
    button2.innerText = "Buy weapon (30 gold)";
    button2.onclick = buyWeapon;
    button3.innerText = "Go to town square";
    button3.onclick = goTown;
}
function goCave(){
    console.log("Going to cave.");
}
function fightDragon(){
    console.log("Fighting dragon.");
}
function buyHealth(){

}
function buyWeapon(){

}