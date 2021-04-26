// name
var inputName = prompt("Inserisci qui il tuo nome");
console.log(inputName);

// surname
var inputSurname = prompt("Inserisci qui il tuo cognome");
console.log(inputSurname);

// color
var inputColor = prompt("Qual'è il tuo colore preferito?");
console.log(inputColor);

document.getElementById("name").innerHTML = inputName;
document.getElementById("surname").innerHTML = inputSurname;
document.getElementById("color").innerHTML = inputColor;

document.getElementById("account").innerHTML = inputName + inputSurname + inputColor + "21";