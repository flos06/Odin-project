function loadAbout() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createAbout())
}

function createAbout() {
    const about = document.createElement("div")
    about.classList.add("about")

    const name = document.createElement("p")
    name.classList.add("text-center")
    name.innerHTML = `Hallo, mijn naam is Floris de Regt. \nIk ben geboren op 12 mei 1993 en ben nu 29 jaar.`
    about.appendChild(name)
    return about
}

export default loadAbout