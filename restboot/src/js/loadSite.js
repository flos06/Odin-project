import loadAbout from "./loadAbout"
import loadProjects from "./loadProjects"
import loadHome from "./loadHome"

function createHeader() {
// creates the header and navbar

    const header = document.createElement("header")
    header.classList.add("header")
    const navbar = document.createElement("nav")
    navbar.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark")
    header.appendChild(navbar)
    const containerFluid = document.createElement("div")
    containerFluid.classList.add("container-fluid")
    navbar.appendChild(containerFluid)
    const logo = document.createElement('a')
    logo.textContent ="Floris de Regt"
    logo.classList.add("navbar-brand")
    containerFluid.appendChild(logo)

   

    const button = document.createElement("button")
    button.classList.add("navbar-toggler")
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#navbarCollapse");
    button.setAttribute('type', 'button');
    containerFluid.appendChild(button)

    const toggleIcon = document.createElement("span")
    toggleIcon.classList.add("navbar-toggler-icon")
    button.appendChild(toggleIcon)

    const collapse = document.createElement("div")
    collapse.classList.add("collapse", "navbar-collapse")
    collapse.setAttribute("id", "navbarCollapse")
    containerFluid.appendChild(collapse)

    const navButtons = document.createElement("div")
    navButtons.classList.add("navbar-nav")
    collapse.appendChild(navButtons)

    const butHome = document.createElement("a")
    butHome.classList.add("nav-item", "nav-link", "active")
    butHome.setAttribute("href", "#")
    butHome.textContent = "Home"

    butHome.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        // sets home as active
        setActive(butHome)
        //loads home
        loadHome();
    })

    const butAbout = document.createElement("a")
    butAbout.classList.add("nav-item", "nav-link")
    butAbout.setAttribute("href", "#")
    butAbout.textContent = "About"

    butAbout.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        // sets about as active
        setActive(butAbout)
        //loads about
        loadAbout();
    })
   

    const projects = document.createElement("a")
    projects.classList.add("nav-item", "nav-link")
    projects.setAttribute("href", "#")
    projects.textContent = "Projects"

    projects.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        // sets about as active
        setActive(projects)
        //loads projects
        loadProjects();
    })

    navButtons.append(butHome, butAbout, projects)
    
    return header;
}


function setActive(button) {
    const buttons = document.querySelectorAll(".nav-item")
    buttons.forEach(button => {

        button.classList.remove("active");
        
    })
    button.classList.add("active")
}


function createMain() {
    const main = document.createElement("main")
    content.appendChild(main)
    main.classList.add("main")
    return main;
}

function loadSite() {
    const content = document.querySelector(".content")
    content.appendChild(createHeader())
    createMain()
    loadHome();
}


export default loadSite;