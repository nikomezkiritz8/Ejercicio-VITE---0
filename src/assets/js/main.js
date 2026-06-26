import "../scss/main.scss";

import "./assets/_artJs.js";

import { artAcordeon01 } from "./assets/_artAcordeon01.js";

artAcordeon01();

import "./assets/_artSlider01.js";
import modal from "./assets/_modal.js";
import Dialog from "./assets/templates/Dialog.js";
import Dialog2 from "./assets/templates/Dialog2.js";
import Dialog3 from "./assets/templates/Dialog3.js";

//
const $btnOpenModal = document.querySelector("#openModal1");
$btnOpenModal.addEventListener("click", () => {
  document.body.appendChild(modal(Dialog()));
});

const $btnOpenModal2 = document.querySelector("#openModal2");
$btnOpenModal2.addEventListener("click", () => {
  document.body.appendChild(modal(Dialog2()));
});

const $btnOpenModal3 = document.querySelector("#openModal3");
$btnOpenModal3.addEventListener("click", () => {
  document.body.appendChild(modal(Dialog3()));
});
