// Footer
const footer = document.createElement("footer");
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.textContent = `\u00A9 ${thisYear} Sung Kim. All rights reserved.`;
footer.appendChild(copyright);

// Skills
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Materialize CSS",
  "Java",
  "Spring",
  "Spring Boot",
  "REST APIs",
  "C#",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "PHP",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "T-SQL",
  "PL/SQL",
  "Hibernate/JPA",
  "Unit Testing (JUnit, Mockito)",
  "Integration Testing (Spring Boot Test, MockMvc)",
  "Postman",
  "Git",
  "GitHub",
  "Version Control",
  "Power BI",
  "Power Automate",
  "Microsoft 365 Suite"
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}

// Messages + Messages Form
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.usersName.value;
  const email = e.target.usersEmail.value;
  const message = e.target.usersMessage.value;

  console.log(name, email, message);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <div class="msg-content">
        <a href="mailto:${email}">${name}</a>
        <span class="msg-text"> ${message}</span>
    </div>`;

  // Edit button
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.innerText = "edit";
  editButton.dataset.mode = "view";

  editButton.addEventListener("click", (e) => {
    const entry = e.target.closest("li");
    const content = entry.querySelector(".msg-content");
    let msgSpan = content.querySelector(".msg-text");

    if (editButton.dataset.mode === "view") {
      const current = msgSpan.textContent.replace(/^ —\s*/, "");
      const textarea = document.createElement("textarea");
      textarea.className = "msg-edit";
      textarea.rows = 3;
      textarea.value = current;

      content.replaceChild(textarea, msgSpan);
      editButton.innerText = "save";
      editButton.dataset.mode = "edit";
    } else {
      const textarea = content.querySelector(".msg-edit");
      const newText = textarea.value.trim();

      const newSpan = document.createElement("span");
      newSpan.className = "msg-text";
      newSpan.textContent = ` — ${newText}`;
      content.replaceChild(newSpan, textarea);

      editButton.innerText = "edit";
      editButton.dataset.mode = "view";
    }
  });

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "remove";

  removeButton.addEventListener("click", (e) => {
    const entry = e.target.closest("li");
    entry.remove();
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  e.target.reset();
});

const GITHUB_USERNAME = "snugsung";

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    // Clear any existing content
    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = repositories[i].html_url;
      a.textContent = repositories[i].name;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      projectList.appendChild(li);
    }

    // If no repos, display a message indicating no repositories
    if (repositories.length === 0) {
      const empty = document.createElement("li");
      empty.innerText = "No repositories to display yet.";
      projectList.appendChild(empty);
    }
  })
  .catch((error) => {
    console.error(error);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    const errorItem = document.createElement("li");
    errorItem.innerText = "Sorry—could not load projects right now.";
    projectList.appendChild(errorItem);
  });
