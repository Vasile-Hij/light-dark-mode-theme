const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const textBox = document.getElementById('text-box');

function imageMode(color) {
    image1.src = `img/weather_${color}.svg`;
    image2.src = `img/charts_${color}.svg`;
    image3.src = `img/light-dark_${color}.svg`;
    image4.src = `img/quiz_${color}.svg`;
}

function darkMode() {
    textBox.style.backgroundColor = '';
    toggleIcon.children[0].textContent = 'DARK MODE';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

function lightMode() {
    textBox.style.backgroundColor = '';
    toggleIcon.children[0].textContent = 'LIGHT MODE';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const scrollBtn = document.getElementById('scroll-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

function toggleMenu(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('open');
}

function closeMenu() {
    dropdownMenu.classList.remove('open');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger-wrapper')) {
        closeMenu();
    }
});

function toggleScroll() {
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    if (atBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

window.addEventListener('scroll', () => {
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    scrollBtn.innerHTML = atBottom ? '&#8593;' : '&#8595;';
});

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
}
