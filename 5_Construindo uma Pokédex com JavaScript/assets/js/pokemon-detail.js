
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const number = urlParams.get('number');

async function fetchPokemonDetails() {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    const pokemon = await pokeApi.getPokemonDetail(url);

    document.getElementById('pokemonName').innerHTML = pokemon.name;
    document.getElementById('numberDetail').innerHTML = `#${pokemon.number}`;
    document.getElementById('typesDetail').innerHTML = pokemon.types.map((type) => `<li class="typeDetail ${type}">${type}</li>`).join('');
    document.getElementById('detailImage').src = pokemon.photo;
    document.getElementById('detailImage').alt = pokemon.name;
    document.getElementById('height').innerHTML = pokemon.height;
    document.getElementById('weight').innerHTML = pokemon.weight;
    document.getElementById('abilities').innerHTML = pokemon.abilities.map((ability) => ability).join(', ');
    document.getElementById('detail').classList.add(pokemon.type);
}

fetchPokemonDetails();




