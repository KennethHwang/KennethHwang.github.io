'use strict';

alert("I'm JavaScript!");
let admin;
let name;
name = "John";
admin = name;
alert(admin);

const OUR_PLANET_NAME = "Earth";
let curUser;
// alert(`you are on planet ${prompt("What planet are you on?", 'Earth')}`);
alert(`Your name is ${prompt("What is your name?", 'John')}`)

let input = prompt("What's the 'official' name of JavaScript?",'');
if (input == 'ECMAScript') {
    alert("Right!");
} else {
    alert("You don't know? 'ECMAScript'!");
}

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//     (login == '') ? 'No login' :
//     '';