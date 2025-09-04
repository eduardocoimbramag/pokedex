const pokemonName = document.querySelector("#poke-name")
const pokemonId = document.querySelector("#poke-id")
const pokemonImage = document.querySelector(".pokemon-image")
const pokemonSearch = document.querySelector(".form")
const pokemonInput = document.querySelector(".poke-input")
const pokemonBtnPrev = document.querySelector("#button-prev")
const pokemonBtnNext = document.querySelector("#button-next")

async function fetchPokemon(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    const data = await APIResponse.json()
    return data
}

async function renderPokemon(pokemon) {
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonId.innerHTML = data.id + "&nbsp;"
    pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
    pokemonInput.value = ""
}

function submitForm(event) {
    event.preventDefault()
    renderPokemon(pokemonInput.value)
}

function prevClick() {
    alert("Prev Clicked")
}

function nextClick() {
    alert("Prev Clicked")
}

pokemonSearch.addEventListener("submit", submitForm)
pokemonBtnPrev.addEventListener("click", prevClick)
pokemonBtnNext.addEventListener("click", nextClick)

renderPokemon("1")