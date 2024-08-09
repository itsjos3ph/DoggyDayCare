/*jshint esversion: 6 */
// For JS Validator

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let numDays = 0;
let cost = document.getElementById("calculated-cost");

const cleardaysButton = document.getElementById("clear-button");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");

const monButton = document.getElementById('monday');
const tueButton = document.getElementById('tuesday');
const wedButton = document.getElementById('wednesday');
const thuButton = document.getElementById('thursday');
const friButton = document.getElementById('friday');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function daySwitch(dayButton) {
    if (dayButton.classList.contains('clicked')) {
    dayButton.classList.remove('clicked');
    numDays--;
    } else {
    dayButton.classList.add('clicked');
    numDays++;
    }
    calculate();
    }
    
    monButton.addEventListener('click', () => daySwitch(monButton));
    tueButton.addEventListener('click', () => daySwitch(tueButton));
    wedButton.addEventListener('click', () => daySwitch(wedButton));
    thuButton.addEventListener('click', () => daySwitch(thuButton));
    friButton.addEventListener('click', () => daySwitch(friButton));


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function reset() {
    monButton.classList.remove('clicked');
    tueButton.classList.remove('clicked');
    wedButton.classList.remove('clicked');
    thuButton.classList.remove('clicked');
    friButton.classList.remove('clicked');
    
    numDays = 0;
    calculate();
    }
    
    cleardaysButton.addEventListener('click', reset);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

    // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function halfrate() {
    dailyRate = 20;
    fullButton.classList.remove('clicked');
    halfButton.classList.add('clicked');
    calculate();
    }
    
    function fullrate() {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculate();
    }

    fullButton.addEventListener('click', fullrate);
    halfButton.addEventListener('click', halfrate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const total = dailyRate * numDays;
    cost.innerHTML = total;
}