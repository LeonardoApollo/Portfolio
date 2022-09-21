/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
$(document).ready(function () {
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });
  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });
  const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');
  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
  $('form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Неверное имя",
      email: {
        required: "Введите свою почту",
        email: "Неверный адрес почты"
      }
    }
  });
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let responce = await fetch('smart.php', {
      method: 'POST',
      body: formData
    });

    if (responce.ok) {
      let result = await responce.json();
      alert(result.message);
      $("form").trigger("reset");
    } else {
      alert("Ошибка отправки формы");
    }
  }
});
/******/ })()
;