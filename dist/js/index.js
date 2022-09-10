/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});
/******/ })()
;