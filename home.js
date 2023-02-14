
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Prerna Dave";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });






//  typed js effect start
// var typed = new typed(".typing-text", {
//     strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
//     loop: true,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500,
// });
// <!-- typed js effect ends -->



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
    let skillsContainer = document.getElementById("row")
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