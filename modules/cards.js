import createEvents from "/modules/storage.js";

const amountOfPokemons=50;
const cardContainer=document.querySelector(".container");
const pokemons=[];

const fetchURL=async(id)=>{
  try{
    let url=await fetch("https://pokeapi.co/api/v2/pokemon/" + id); 
    let data = await url.json();
    return data
  }
  catch(err){
    console.log(err);
  }
}

const getAllPokemons=async()=>{
  for (let i = 1; i <= amountOfPokemons; i++) {
    const pokemon=await fetchURL(i)
    pokemons.push(pokemon)
  };
  console.log(pokemons);
  showPokemons(pokemons);
  createEvents();
}

const showPokemons=async(pokemons)=>{
  pokemons.forEach(pokemon => {
    let types=getPokemonTypes(pokemon);
    let card=`
    <article class="card">
            <box-icon id="${pokemon.name}" name='heart' type='solid' color='#fb0106' ></box-icon>
            <section class="card_header">
                <img src="${pokemon.sprites.front_shiny}" alt="Ditto">
                <h2 class="card_title">${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                <p class="pokemon_types" id="pokemon_type">${types}</p>
            </section>
            <section class="pokemon_info">
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p class="pokemon_stat" id="hp">${pokemon.stats[0].base_stat}</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">Ataque</p>
                    <p class="pokemon_stat" id="attack">${pokemon.stats[1].base_stat}</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">Defensa</p>
                    <p class="pokemon_stat" id="defense">${pokemon.stats[2].base_stat}</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">Ataque especial</p>
                    <p class="pokemon_stat" id="hp">${pokemon.stats[3].base_stat}</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">Defensa especial</p>
                    <p class="pokemon_stat" id="hp">${pokemon.stats[4].base_stat}</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">Velocidad</p>
                    <p class="pokemon_stat" id="hp">${pokemon.stats[5].base_stat}</p>
                </div>
            </section>
        </article>
    `
    cardContainer.innerHTML+=card;
  });
}

const getPokemonTypes=(pokemon)=>{
  return pokemon.types.map(type=>{
    return type.type.name
  })
}

getAllPokemons();

export { pokemons, showPokemons, getPokemonTypes };
