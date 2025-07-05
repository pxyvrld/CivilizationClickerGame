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
const buildersList = document.getElementById('buildersList');


//buildings
let sawmills = 0;
let quarries = 0;
const sawmillsDisplay = document.getElementById('sawmills');
const quarriesDisplay = document.getElementById('quarries');

//buttons
const foodButtonClicker = document.getElementById('gatherFood');
const woodButtonClicker = document.getElementById('gatherWood');
const stoneButtonClicker = document.getElementById('gatherStone');
const buyBuilderBtn = document.getElementById('builderBuy');

//Functions
function buyBuilder() {
    if (food>=10) {
        food = food - 10;

        const newBuilder = {
            id: builders.length + 1,
            builderPoints: 3,
            maxPoints: 3
        };

        builders.push(newBuilder);
        renderBuilders();
    }
}

function renderBuilders() {
    buildersList.innerHTML = '';

     //Adding Builders
    builders.forEach((builder, index) => {
        const builderText = `Builder ${builder.id} (${builder.builderPoints}/${builder.maxPoints})`;

        const builderContainer = document.createElement('div');

        const builderInfo = document.createElement('span');
        builderInfo.textContent = builderText;

        const buildSawmillBtn = document.createElement('button');
        buildSawmillBtn.textContent = 'Build Sawmill';
        buildSawmillBtn.addEventListener('click', () => {
            if (builder.builderPoints > 0) {
                builder.builderPoints--;
                sawmills++;

                if (builder.builderPoints === 0) {
                    setTimeout(() => {
                    builders.splice(index, 1);
                    updateUI();
                }, 50);
                } else {
                    updateUI();
                }
            }
        });

        const buildQuarryBtn = document.createElement('button');
        buildQuarryBtn.textContent = 'Build Quarry';
        buildQuarryBtn.addEventListener('click', () => {
            if (builder.builderPoints > 0) {
                builder.builderPoints--;
                quarries++;

                if (builder.builderPoints === 0) {
                    setTimeout(() => {
                    builders.splice(index, 1);
                    updateUI();
                }, 50);
                } else {
                    updateUI();
                }
            }
        });

        builderContainer.appendChild(builderInfo);
        builderContainer.appendChild(buildSawmillBtn);
        builderContainer.appendChild(buildQuarryBtn);

        buildersList.appendChild(builderContainer);
    });
}

function materialsClicker() {
    
    function foodClick() {
    food++;
    updateUI()
    }

    function woodClick() {
    wood++
    updateUI()
    }

    function stoneClick() {
    stone++
    updateUI()
    }

    foodButtonClicker.addEventListener('click', foodClick);
    woodButtonClicker.addEventListener('click', woodClick);
    stoneButtonClicker.addEventListener('click', stoneClick);

}

function buildingsProduction() {
    wood = wood + sawmills * 1;
    stone = stone + quarries * 1;
    updateUI();
}

function updateUI() {

    sciencePointsDisplay.textContent = sciencePoints;
    culturePointsDisplay.textContent = culturePoints;
    religionPointsDisplay.textContent = religionPoints;

    foodDisplay.textContent = food;
    woodDisplay.textContent = wood;
    stoneDisplay.textContent = stone;

    sawmillsDisplay.textContent = sawmills;
    quarriesDisplay.textContent = quarries;
    renderBuilders()

}

//Game
function Game() {
    materialsClicker();
    buyBuilderBtn.addEventListener('click', buyBuilder);
    setInterval(buildingsProduction, 1000);

}

Game();




