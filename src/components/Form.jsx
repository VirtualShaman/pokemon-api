import React, { useState } from 'react'

const Form = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const pokedex = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
                setAllPokemon(response.results)
            }).catch(err=>{
                console.log(err);
            });
    }
    
    return (
        <div>
            <button onClick= {pokedex}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, i)=>{
                    return(
                        <div key = {i}>
                            <p>{i+1}.{pokemon.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Form
