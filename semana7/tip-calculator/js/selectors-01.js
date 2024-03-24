// esto es una forma antigua pero igual funciona
// document.getElementById(""); // para id
// document.getElementsByClassName(""); // para classe
// document.getElementsByTagNameNS(""); // para element

// modo moderno: este se usa para todo igual
const containerBill = document.querySelector("#container-bill");
const containerPercentages = document.querySelector("#container-percentage");
const containerInputPeople = document.querySelector("#container-input-people");

const inputBill = document.querySelector("#input-bill");
const inputPeople = document.querySelector("#input-people");

const buttonCalculate = document.querySelector("#button-calculate");

const perPerson = document.querySelector("#per-person");
const total = document.querySelector("#total");
// hemos creado id en html y ahora para acceder uso .querySelector

// .querySelector se usa para acceder a todo 
// por id,  por classe, por elemento

/*
formas de acceder con querySelector
id  meto #

es.   document.querySelector("#contailer-bill")
*/

/*
formas de acceder con querySelector
classe  meto el punto .

es.   document.querySelector(".container-input")
*/

/*
formas de acceder con querySelector
elemento basta meter el nombre del elemento 

es.    document.querySelector("main")
*/
