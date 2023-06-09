const amountOfPokemons=256;
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
  }
  showPokemons()
}

const showPokemons=async()=>{
  console.log(pokemons);
  pokemons.forEach(pokemon => {
    let card=`
    <article class="card">
            <section class="card_header">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto">
                <h2 class="card_title">${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                <p id="pokemon_type">Normal</p>
            </section>
            <section class="pokemon_info">
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
                <div class="pokemon_stat">
                    <p class="pokemon_info_title">HP</p>
                    <p id="hp">45</p>
                </div>
            </section>
        </article>
    `
    cardContainer.innerHTML+=card;
  });
}

getAllPokemons();

