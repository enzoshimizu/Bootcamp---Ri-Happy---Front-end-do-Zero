
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const maxRecords = 151;
let limit =5;
let offset = 0;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((type) => `<li class="type ${type}">${type}</li>`).join('');
};

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types)}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>`;
};

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    });
};

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtRecordNextPage = offset + limit;

    if (qtRecordNextPage >= maxRecords){
        limit += maxRecords - qtRecordNextPage;  
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    };
    
    loadPokemonItens(offset, limit);
})

loadPokemonItens();