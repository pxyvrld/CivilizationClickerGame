//Zmienne globalne

//stats
let sciencePoints = 0;
let culturePoints = 0;
let religionPoints = 0;
const sciencePointsDisplay = document.getElementById('sciencePoints');
const culturePointsDisplay = document.getElementById('culturePoints');
const religionPointsDisplay = document.getElementById('religionPoints');

//materials
let food = 0;
let wood = 0;
let stone = 0;
const foodDisplay = document.getElementById('food');
const woodDisplay = document.getElementById('wood');
const stoneDisplay = document.getElementById('stone');

//builders
let builders = [];


//buildings
let sawmills = 0;
let quarries = 0;
const sawmillsDisplay = document.getElementById('sawmills');
const quarriesDisplay = document.getElementById('quarries');

//buttons
const foodButtonClicker = document.getElementById('gatherFood');
const woodButtonClicker = document.getElementById('gatherWood');
const stoneButtonClicker = document.getElementById('gatherStone');

function materialsClicker() {
    
    function foodClick() {
    food++;
    console.log('Dodano jedzenie');
    }

    function woodClick() {
    wood++
    }

    function stoneClick() {
    stone++
    }

    foodButtonClicker.addEventListener('click', foodClick);
    woodButtonClicker.addEventListener('click', woodClick);
    stoneButtonClicker.addEventListener('click', stoneClick);

}

materialsClicker();


function updateUI() {

    sciencePointsDisplay.textContent = sciencePoints;
    culturePointsDisplay.textContent = culturePoints;
    religionPointsDisplay.textContent = religionPoints;

    foodDisplay.textContent = food;
    woodDisplay.textContent = wood;
    stoneDisplay.textContent = stone;

    sawmillsDisplay.textContent = sawmills;
    quarriesDisplay.textContent = quarries;

}

//UI updater
 const uptadeInterval = setInterval(() => {
    updateUI();
    console.log("Zaktualizowano hud");
 }, 500);

 //Adding Builders TODO:
builders.forEach(builder => {
    
});