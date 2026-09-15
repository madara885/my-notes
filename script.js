const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

// Открытие и закрытие меню при клике на бургер
burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Закрытие мобильного меню при клике на любую ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
