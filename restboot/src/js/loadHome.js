function loadHome() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createHome())
}

function createHome() {
    const home = document.createElement("div")
    home.classList.add("home")

    const info = document.createElement("p")
    info.classList.add("text-center")
    info.textContent = `Welkom op mijn persoonlijke site. 
    Hier is informatie te vinden over mij en waar ik zoal mee bezig ben.
    Zo is er een overzicht van de projecten waar ik tot nu toe aan heb gewerkt en kunt u contact met mij opnemen.`
    home.appendChild(info)
    return home;
}


export default loadHome