let outputtext= document.getElementById("datum");
let datum = prompt("Wat is je geboortedatum?");
let output = "Je bent ongeveer " + (2026 - datum) + " jaar oud.";

outputtext.innerHTML = output;