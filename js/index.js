const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.textContent = `\u00A9 ${thisYear} Sung Kim. All rights reserved.`;
footer.appendChild(copyright);

