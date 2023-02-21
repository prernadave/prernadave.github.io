// const toggle = document.querySelector(".toggle");
// toggle.addEventListener("click", (e) => {
//   const html = document.querySelector("html");
//   if (html.classList.contains("dark")) {
//     html.classList.remove("dark");
//     e.target.innerHTML = "Dark";
//   } else {
//     html.classList.add("dark");
//     e.target.innerHTML = "Light";
//   }
// });
var myNav = document.getElementById('nav-menu');
var myNav2 = document.getElementById('main');
window.onscroll = function () { 
    if ( document.documentElement.scrollTop >= 15 ) {
        myNav.classList.add("nav-colored");
        myNav2.classList.add("nav-colored");
        // myNav.classList.remove("nav-transparent");
    } 
    else {
        // myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav2.classList.remove("nav-colored");
    }
};

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






document.getElementById("resume-button-1").onclick=()=>{
window.open("https://drive.google.com/file/d/1jAVNkEnHArRuRQZQQNAssEHqub5ECGJF/view?usp=share_link");
}

// document.getElementById("resume-button-2").onclick=()=>{
//   window.open("https://drive.google.com/file/d/1jAVNkEnHArRuRQZQQNAssEHqub5ECGJF/view?usp=share_link");
// }
   

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display= "block";
}

// let docTitle = document.title;
// window.addEventListener("blur", () => {
//   document.title = "Please come back :'(";
// });
// window.addEventListener("focus", () => {
//   document.title = docTitle;
// });

let i=0;
let txt="Full Stack Web Developer.";
let speed=75;

typeWriter()

function typeWriter() {
    if(i < txt.length){
      document.getElementById("user-detail-name").style.color="red";
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {
      // reset the index when it reaches the end of the text
      i = 0;
      // clear the text
      document.getElementById("demo1").innerHTML = "";
      // make the recursive call
      document.getElementById("user-detail-name").style.color="#71e281";
      setTimeout(typeWriter, speed);
    }
  }


  // var typed = new Typed(".typing-2", {
  //   strings: ["Full Stack Web Developer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true
// });
// //   // owl carousel script
// //   $('.carousel').owlCarousel({
// //     margin: 20,
// //     loop: true,
// //     autoplay: true,
// //     autoplayTimeOut: 2000,
// //     autoplayHoverPause: true,
// //     responsive: {
// //         0:{
// //             items: 1,
// //             nav: false
// //         },
// //         600:{
// //             items: 2,
// //             nav: false
// //         },
// //         1000:{
// //             items: 3,
// //             nav: false
// //         }
// //     }
// // });


// async function fetchData(type = "skills") {
//     let response
//     type === "skills" ?
//         response = await fetch("skills.json")
//         : 
//         response = await fetch("./projects/project.json")
//     const data = await response.json();
//     return data;
// }

// function showSkills(skills) {
//     let skillsContainer = document.getElementById("row");
//     let skillHTML = "";
//     skills.forEach(skill => {
//         skillHTML += `
//         <div class="bar">
//               <div class="info">
//                 <img src=${skill.icon} alt="skill" class="skills-card-img"/>
//                 <span class="skills-card-name">${skill.name}</span>
//               </div>
//             </div>`
//     });
//     skillsContainer.innerHTML = skillHTML;
// }


// fetchData().then(data => {
//     showSkills(data);
// });



