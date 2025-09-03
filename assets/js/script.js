const pokemonName = document.querySelector(".poke-name")
const pokemonId = document.querySelector(".poke-id")

function fetchPokemon(pokemon) {
    const APIResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIResponse)
}

fetchPokemon()