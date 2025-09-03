const pokemonName = document.querySelector(".poke-name")
const pokemonId = document.querySelector(".poke-id")

async function fetchPokemon(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIResponse)
}

fetchPokemon(1)