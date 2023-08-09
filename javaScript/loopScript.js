const hamburgerMenu = document.querySelector('.hamburger-menu');
const bannerList = document.querySelector('.banner-list');

hamburgerMenu.addEventListener('click', () => {
    bannerList.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        bannerList.classList.remove('show');
    }
});