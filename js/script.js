function changeLanguage(lang) {
    const body = document.body;
    if (lang === 'en') {
        body.classList.remove('lang-ar');
        body.classList.add('lang-en');
    } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-ar');
    }
}