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

//districts
let scienceDistrict = 0;
let cultureDistrict = 0;
let religionDistrict = 0;

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
        buildSawmillBtn.textContent = 'Build Sawmill (100 wood & 100 stone)';
        buildSawmillBtn.addEventListener('click', () => {
            if (builder.builderPoints > 0 && wood >= 10 && stone >= 10) {
                builder.builderPoints--;
                sawmills++;
                wood = wood - 10;
                stone = stone - 10;

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
        buildQuarryBtn.textContent = 'Build Quarry (100 wood & 100 stone)';
        buildQuarryBtn.addEventListener('click', () => {
            if (builder.builderPoints > 0 && wood >= 10 && stone >= 10) {
                builder.builderPoints--;
                quarries++;
                wood = wood - 10;
                stone = stone - 10;

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

        const buildScienceDistrictBtn = document.createElement('button');
        buildScienceDistrictBtn.textContent = 'Build Science District (500 wood & 500 stone & 3 builder points)';

        if (scienceDistrict === 0) {
            buildScienceDistrictBtn.addEventListener('click', () => {
                if (builder.builderPoints >= 3 && wood >= 50 && stone >= 50) {
                    builder.builderPoints = builder.builderPoints - 3;
                    scienceDistrict++;
                    wood = wood - 50;
                    stone = stone -50;

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
            
            builderContainer.appendChild(buildScienceDistrictBtn);
        }

        const buildCultureDistrictBtn = document.createElement('button');
        buildCultureDistrictBtn.textContent = 'Build Culture District (500 wood & 500 stone & 3 builder points)';

        if (cultureDistrict === 0) {
            buildCultureDistrictBtn.addEventListener('click', () => {
                if (builder.builderPoints >= 3 && wood >= 50 && stone >= 50) {
                    builder.builderPoints = builder.builderPoints - 3;
                    cultureDistrict++;
                    wood = wood - 50;
                    stone = stone -50;

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
            
            builderContainer.appendChild(buildCultureDistrictBtn);
        }

        const buildReligionDistrictBtn = document.createElement('button');
        buildReligionDistrictBtn.textContent = 'Build Religion District (500 wood & 500 stone & 3 builder points)';

        if (religionDistrict === 0) {
            buildReligionDistrictBtn.addEventListener('click', () => {
                if (builder.builderPoints >= 3 && wood >= 50 && stone >= 50) {
                    builder.builderPoints = builder.builderPoints - 3;
                    religionDistrict++;
                    wood = wood - 50;
                    stone = stone -50;

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
            
            builderContainer.appendChild(buildReligionDistrictBtn);
        }


        buildersList.appendChild(builderContainer);
    });
}

function districtsSection() {
    
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

function Production() {
    wood = wood + sawmills * 1;
    stone = stone + quarries * 1;
    sciencePoints = sciencePoints + scienceDistrict * 1;
    culturePoints = culturePoints + cultureDistrict * 1;
    religionPoints = religionPoints + religionDistrict * 1;
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
    setInterval(Production, 1000);

}

Game();




