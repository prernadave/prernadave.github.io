
  function resume(){
    window.open('./assets/Prerna_Dave_Resume (2).pdf',"_blank")
  }

  async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        : 
        response = await fetch("./projects/project.json")
    const data = await response.json();
    return data;
  }
  
  function showSkills(skills) {
    let skillsContainer = document.getElementById("row");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" class="skills-card-img"/>
                <span class="skills-card-name">${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
  }
  
  
  fetchData().then(data => {
    showSkills(data);
  });
  
  