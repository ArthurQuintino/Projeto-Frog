/*Identificadores de todos A de cards para adicionar um evento de click*/
window.document.querySelectorAll(".card1 a, .card a").forEach((link) => {
    link.addEventListener("click", (event) => {
    })
})

const SEARCH_SELECTOR = ".pesquisar input"
const CARDS_SELECTOR = ".card1, .card"
const cards = window.document.querySelectorAll(CARDS_SELECTOR)

/*Metodo de Pesquisar por meio do Id do Card*/
window.document.querySelector(SEARCH_SELECTOR).addEventListener("input", (event) => {

    Array.from(cards).forEach((card) => {
        if ((card.dataset.name ?? "").includes(event.target.value))
            card.style.display = "block"
        else
            card.style.display = "none"
    }
    )


}
)