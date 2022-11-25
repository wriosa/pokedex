import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])
    // console.log(pokemon)

    let res = "";
  switch (pokemon.types?.[0].type.name) {
    case "normal":
        res = "normal"
        break;
    case "fighting":
      res = "fighting";
      break;
    case "flying":
      res = "flying";
      break;
    case "poison":
      res = "poison";
      break;
    case "ground":
      res = "ground";
      break;
    case "rock":
      res = "rock";
      break;
    case "bug":
      res = "bug";
      break;
    case "ghost":
      res = "ghost";
      break;
    case "steel":
      res = "steel";
      break;
    case "fire":
      res = "fire";
      break;
    case "water":
      res = "water";
      break;
    case "grass":
      res = "grass";
      break;
    case "electric":
      res = "electric";
      break;
    case "psychic":
      res = "psychic";
      break;
    case "ice":
      res = "ice";
      break;
    case "dragon":
      res = "dragon";
      break;
    case "dark":
      res = "dark";
      break;
    case "fairy":
      res = "fairy";
      break;
    case "unknown":
      res = "unknown";
      break;
    case "shadow":
      res = "shadow";
      break;

    default:
      break;
  }

    return (
        <div className="tarjet">
            <Link to={`/pokedex/${pokemon.id}`} className={res}>
                <div className="text">
                    <h1>{pokemon.name}</h1>
                    <p><b>Types: </b>{pokemon.types?.map(
                        (types) => types.type.name + ","
                    )}</p>
                    <p><b>Hp: </b>{pokemon.stats?.[0].base_stat}</p>
                    <p><b>Attack: </b>{pokemon.stats?.[1].base_stat}</p>
                    <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}</p>
                    <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}</p>
                </div>
                <div className="img">
                    <img src={pokemon.sprites?.other?.["official-artwork"]?.front_default} alt="" />
                </div>

            </Link>
        </div>

    );
};

export default PokemonCard;