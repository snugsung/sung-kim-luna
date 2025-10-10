const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const currentYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.textContent = `© ${currentYear} Sung Kim`;
footer.appendChild(copyright);