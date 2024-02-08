//Работа с навигацией
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');


navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
})

// Находим ссылки внутри мобильной навигации

const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
    // Для каждой ссылки добавляем прослушку на событию "Клик"
    item.addEventListener('click', function () {

        navIcon.classList.remove('nav-icon--active') // Удаляем активный класс у иконки моб.навигации
        nav.classList.remove('nav--active') // Удаляем активный класс у блока моб.навигации
    })
})
