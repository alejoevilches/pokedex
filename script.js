const amountOfPokemons=5;

const getPokemon=async(id)=>{
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
  for (let i = 1; i <= 10; i++) {
    const pokemon=await getPokemon(i)
    console.log(pokemon)
  }
}

getAllPokemons();

