document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.main__list').classList.toggle('active')
    document.querySelector('.close').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.main__list').classList.remove('active')
    document.querySelector('.close').classList.toggle('active');
});
