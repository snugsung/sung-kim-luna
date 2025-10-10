const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.textContent = `\u00A9 ${thisYear} Sung Kim. All rights reserved.`;
footer.appendChild(copyright);

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Materialize CSS", "Java", "Spring", "Spring Boot", "REST APIs", "C#", "Node.js", "Express", "Python", "Django", "PHP", "MongoDB", "PostgreSQL", "MySQL", "T-SQL", "PL/SQL", "Hibernate/JPA", "Unit Testing (JUnit, Mockito)", "Integration Testing (Spring Boot Test, MockMvc)", "Postman", "Git", "GitHub", "Version Control", "Power BI", "Power Automate", "Microsoft 365 Suite"];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
  
    skill.innerText = skills[i];
  
    skillsList.appendChild(skill);
}; 

// Handle Message Form Submit
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const message = e.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span> - ${message}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    e.target.reset();
});