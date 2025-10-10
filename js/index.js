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

