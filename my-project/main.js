axios.get("projects.json")
.then(res => {
    const projects = res.data;
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
    const projectDiv = document.createElement("a"); 
    projectDiv.href = project.link;
    projectDiv.target = "_blank";
    projectDiv.rel = "noopener noreferrer";
    projectDiv.className = "relative group flex justify-center items-center h-[500px] overflow-hidden";

    projectDiv.innerHTML = `
        <!-- picture -->
        <img src="${project.image}" alt="${project.alt}" 
            class="w-full h-full object-cover group-hover:scale-110 duration-500">
        
        <!-- overlay -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center overlay">
        <h2 class="textH">${project.name}</h2>
        </div>
    `;

    projectsContainer.appendChild(projectDiv);
    });
})
.catch(err => console.error(err));

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let ul = document.getElementById("ul");

menu.addEventListener('click',function(){
    ul.style.right = "0";
})
close.addEventListener('click',function(){
    ul.style.right = "-200%";
})



// Smooth scrolling for anchor links
document.querySelectorAll('ul li a').forEach(el=>{
    el.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(el.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        })
        ul.style.right = "-200%";
    })
})

