const navPrimary = document.querySelector('.navLink');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = navPrimary.getAttribute('data-visible');

    if (visibility === "false") {
        navPrimary.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        navPrimary.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});