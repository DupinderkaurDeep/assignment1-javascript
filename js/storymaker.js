// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const buttonNoun1 = document.getElementById('noun1');
const buttonVerb = document.getElementById('verb');
const buttonAdjective = document.getElementById('adjective');
const buttonNoun2 = document.getElementById('noun2');
const buttonSetting = document.getElementById('setting');

// Constants for p tag to display query selectors
const selectNoun1 = document.getElementById('choosenNoun1');
const selectVerb = document.getElementById('choosenVerb');
const selectAdjective = document.getElementById('choosenAdjective');
const selectNoun2 = document.getElementById('choosenNoun2');
const selectSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const buttonPlayback = document.getElementById('playback');
const buttonRandom = document.getElementById('random');
const storyPara = document.getElementById('story');

// Variables for pre-defined arrays
const arrayNouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const arrayVerbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const arrayAdjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const arrayNouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const arraySettings = ["on the moon", "on the chair", "in the spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    // if-else to change count setting

    const currentNoun = arrayNouns1[noun1Count];  // Display current noun
    selectNoun1.textContent = currentNoun;

    if (noun1Count === arrayNouns1.length - 1) {  // Update count or reset
        noun1Count = 0;
    } else {
        noun1Count++;
    }
}
 // Functions for other buttons 
function verb_on_click() {  
    const currentVerb = arrayVerbs[verbCount];
    selectVerb.textContent = currentVerb;

    if (verbCount === arrayVerbs.length - 1) {
        verbCount = 0;
    } else {
        verbCount++;
    }
}

function adjective_on_click() {
    const currentAdjective = arrayAdjectives[adjectiveCount];
    selectAdjective.textContent = currentAdjective;

    if (adjectiveCount === arrayAdjectives.length - 1) {
        adjectiveCount = 0;
    } else {
        adjectiveCount++;
    }
}

function noun2_on_click() {
    const currentNoun2 = arrayNouns2[noun2Count];
     selectNoun2.textContent = currentNoun2;

    if (noun2Count === arrayNouns2.length - 1) {
        noun2Count = 0;
    } else {
        noun2Count++;
    }
}

function setting_on_click() {
    const currentSetting = arraySettings[settingCount];
     selectSetting.textContent = currentSetting;

    if (settingCount === arraySettings.length - 1) {
        settingCount = 0;
    } else {
        settingCount++;
    }
}

// concatenate the user story and display
function playback_on_click() {  // Display concatenated story
    storyPara.textContent = `${selectNoun1.textContent} ${selectVerb.textContent} ${selectAdjective.textContent} ${selectNoun2.textContent} ${selectSetting.textContent}`;
    studentId.textContent = "Student ID: 20553418";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() { // Generate and display random story
    const randomStory = `${getRandomElement(arrayNouns1)} ${getRandomElement(arrayVerbs)} ${getRandomElement(arrayAdjectives)} ${getRandomElement(arrayNouns2)} ${getRandomElement(arraySettings)}`;
    storyPara.textContent = randomStory;
}

function getRandomElement(array) {  
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners
-------------------------------------------------- */
buttonNoun1.addEventListener('click', noun1_on_click);
buttonVerb.addEventListener('click', verb_on_click);
buttonAdjective.addEventListener('click', adjective_on_click);
buttonNoun2.addEventListener('click', noun2_on_click);
buttonSetting.addEventListener('click', setting_on_click);
buttonPlayback.addEventListener('click', playback_on_click);
buttonRandom.addEventListener('click', random_on_click);



