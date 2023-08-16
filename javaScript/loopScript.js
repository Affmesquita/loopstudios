const hamburgerMenu = document.querySelector('.hamburger-menu');
const bannerList = document.querySelector('.banner-list');
const closeNav = document.querySelector('.close-nav');

hamburgerMenu.addEventListener('click', () => {
    bannerList.classList.add('show');
    closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
    bannerList.classList.remove('show');
    closeNav.style.display = 'none';
});