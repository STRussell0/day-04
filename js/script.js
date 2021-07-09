// Day 04 Daily Challenge



const h2 = document.createElement('h2'); // Created an h2 
h2.innerHTML = 'Number Comparison' // Text for h2

const addItemButton = document.createElement('button'); // Created a button
addItemButton.innerHTML = "Let's Compare!"; // Text for button
addItemButton.addEventListener('click', function () { // Event for button

    let number1 = parseInt(prompt("Please enter the first number:", 10)); //parseInt used to convert input to integers

    let number2 = parseInt(prompt("Please enter the second number:", 10));

    if (number1 < number2) { //If statement to compare the variables

        alert(number2 + ' Is the larger number!'); //alert when number2 is bigger
    } else if (number1 > number2) { 

        alert(number1 + ' Is the larger number!'); //alert when number1 is bigger
    } else if (number1 == number2) {

        alert(number1 + ' & ' + number2 + ' are the same!'); //alert when number1 and number2 are the same!
    }

})


document.body.appendChild(h2); // Puts the h2 on the document
document.body.appendChild(addItemButton); // Puts the button on the document



//Take Home Challenge



const h3 = document.createElement('h2'); // Created an h2. Named the variable h3 just to be different than the previous one on the same file
h3.innerHTML = 'Number Comparison Take Home' // Text for h2

const addItemButton2 = document.createElement('button'); // Created a button.
addItemButton2.innerHTML = "Let's Compare!"; // Text for button
addItemButton2.addEventListener('click', function () { // Event for button

numberCheck();

})



function numberCheck() {

    function checkNum(num) { //Thanks Andrew!!

        while (!Number.isInteger(parseInt(num))){ //While the number is NOT an integer, prompt num below
            num = prompt("That wasn't a number, please pick a number.")
        }
        return num; //If the number is an integer, return to num
    }

    const number3 = checkNum(parseInt(prompt("Please enter the first number:", 10))); //parseInt used to convert input to integers
    console.log(number3);

    // if (isNaN(number3)) {
    //     number3 = parseInt(prompt("That is not a number. Please enter a number:","")) //prompts user they did not enter a number, please enter a number
    // }

    const number4 = checkNum(parseInt(prompt("Please enter the second number:", 10)));
    console.log(number4);
    // if (isNaN(number4)) {
    //     number4 = parseInt(prompt("That is not a number. Please enter a number:",""))
    // }

    if (number3 < number4) { //If statement to compare the variables
        alert(number4 + ' Is the larger number!'); //alert when number2 is bigger
    } else if (number3 > number4) { 
        alert(number3 + ' Is the larger number!'); //alert when number1 is bigger
    } else if (number3 == number4) {
        alert(number3 + ' & ' + number4 + ' are the same!'); //alert when number1 and number2 are the same!
    }
}

// function numberCompare() {

//     if (number1 < number2) { //If statement to compare the variables
//         alert(number2 + ' Is the larger number!'); //alert when number2 is bigger
//     } else if (number1 > number2) { 
//         alert(number1 + ' Is the larger number!'); //alert when number1 is bigger
//     } else if (number1 == number2) {
//         alert(number1 + ' & ' + number2 + ' are the same!'); //alert when number1 and number2 are the same!
//     }
// }

document.body.appendChild(h3); // puts the h2 on the document
document.body.appendChild(addItemButton2); // puts the button on the document

//In-Class Projects

// Logic

// if

if (true) {
    console.log('this code runs if true') //runs
}

if (false) {
    console.log('this code runs if true') //doesn't run
}

//if / else

if (false) {
    console.log('this code runs if true') //doesn't run
} else {
    console.log('this runs if false') //runs
}

// if / else if / else

if (false) {
    console.log('c: this code runs if true') 
} else if (true) {
    console.log('c: this is the second condition')
} else {
    console.log('c: this runs if false')
}

//Andrew's example

// && = And
// || = Or
// ! = Not

// heres an example with words instead of true/false , might help some clicks. will need to extend out the chatbox sideways so it doesn't look weird though lol.

// if (course == MFW || course == WFB){
//     console.log('you\'re in a front-end course.');
// }
// else if (course == JS || course == react){
//     console.log('you\'re in a back-end course.');
// }
// else if (course == WFB && course2 == JS || course == MFW && course2 == react){
//     console.log('youre in two courses at once!');
// }
// else if (!course){
//     console.log('you\'re not in a course.');
// }
// else{
//     console.log('that\'s not even a course, where are you??')
// }

// Switch example

// document.addEventListener('click', function() {
//     let favoriteFood = prompt('what is your favorite food');

//     switch(favoriteFood) {
//         case 'Pizza':
//             console.log('I love Pizza');
//             break;
    
//         case 'Burgers':
//             console.log('Burgers are mare second favorite');
//             break;
    
//         case 'Ice Cream':
//             console.log('I like Ice Cream but not all the time');
//             break;

//         default:
//             console.log('I never tried ' + favoriteFood + ' before')
//     }
    

// }) 

//Don't remember what this is

// let health = 100;

// function takeDamage() {
//     health = health - 10;
//     console.log('health', health);
// }

const inputs = document.querySelectorAll('input');
console.log(inputs);

const streetNumberInput = inputs[0];
const streetNameInput = inputs[1];
const cityInput = inputs[2];
const select = document.querySelector('select');

streetNumberInput.addEventListener('change', function () {
    console.log(this.value);
    if (this.value && parseInt(this.value)) {
        console.log('yay you typed anything and it was a number');
    }
})
streetNameInput.addEventListener('change', function () {
    console.log(this.value);
    this.value && streetNumberInput.value ? console.log('you typed something') : alert ('Boo!')
})
cityInput.addEventListener('change', function () {
    console.log(this.value);
    if (this.value) {
        console.log('yay you typed anything');
    } else {
        alert('Boo!');
    }
})

select.addEventListener('change', function () {
    console.log(this.value);
    switch(this.value) {
        case 'ca':
            console.log('The Golden State');
            break;

        case 'az':
            console.log('The Grand Canyon State');
            break;

        case 'nv':
            console.log('Another City that Never Sleeps');
            break;

        case 'or':
            console.log('Trees Everywhere');
            break;
    }
})



