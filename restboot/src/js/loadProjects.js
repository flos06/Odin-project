function loadProjects() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createProjects())
}

function createProjects() {
    const project = document.createElement("div")
    project.classList.add("projects")
    const text = document.createElement("p")
    text.classList.add("text-center")
    text.textContent = "Hier vind je een overzicht van alle projecten waar ik tot nu toe aan heb gewerkt."
    project.appendChild(text)
    return project
}



export default loadProjects