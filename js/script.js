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
    const number3 = parseInt(prompt("Please enter the first number:", 10)); //parseInt used to convert input to integers

    if (isNaN(number3)) {
        number3 = parseInt(prompt("That is not a number. Please enter a number:","")) //prompts user they did not enter a number, please enter a number
    }

    const number4 = parseInt(prompt("Please enter the second number:", 10));

    if (isNaN(number4)) {
        number4 = parseInt(prompt("That is not a number. Please enter a number:",""))
    }

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

document.body.appendChild(h3);
document.body.appendChild(addItemButton2);