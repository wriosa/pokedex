import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img4 from '../img/img4.png'

const PokedexId = () => {

    const [pokemon, setPokemon] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div className='pokex-id'>
            <div className="logo">
                <img src={img4} alt="" />
            </div>
            <div className='container-id'>
                <div className="id-one">
                <div className="container-pokemon">
                    <img src={pokemon.sprites?.other?.["official-artwork"]?.front_default} alt="" />
                    <div className="weight">
                        <p><b>Height: </b>{pokemon.height}</p>
                        <p><b>Weight: </b>{pokemon.weight}</p>
                    </div>
                    <h1>{pokemon.name}</h1>
                    <p className='id'><b># </b>{pokemon.id}</p>
                </div>
                <div className="type-abi">
                    <div className="type">
                        <h1>Types</h1>
                        <div className='types' key={pokemon.id}>{pokemon.types?.map(
                            (types) => (
                                <div className='abi'>{types.type.name}</div>
                            ))}</div>
                    </div>
                    <div className="abilities">
                        <h1>Abilities</h1>
                        <div className='types' key={pokemon.id}>{pokemon.abilities?.map(
                            (abilities) => (
                                <div className="abi">{abilities.ability.name}</div>
                            ))}</div>
                    </div>
                </div>
                <div className='stats'>
                    <h1>Stats Base</h1>
                    <div>
                        <div className='bar'>
                            <div>HP:   </div>
                            <div className='bar1'>b</div>
                            <div className='bar2'>b</div>
                            <div className='bar-hp'>{pokemon.stats?.[0].base_stat}</div>
                        </div>
                        <div className='bar'>
                            <div>Speed:   </div>
                            <div className='bar1 bar-speed'>b</div>
                            <div className='bar2 bar-speed'>b</div>
                            <div className='bar-spe'>{pokemon.stats?.[5].base_stat}</div>
                        </div>
                        <div className='bar'>
                            <div>Attack:   </div>
                            <div className='bar1 bar-attack'>b</div>
                            <div className='bar2 bar-attack'>b</div>
                            <div className='bar-att'>{pokemon.stats?.[1].base_stat}</div>
                        </div>
                        <div className='bar'>
                            <div>Defense:   </div>
                            <div className='bar1 bar-defense'>b</div>
                            <div className='bar2 bar-defense'>b</div>
                            <div className='bar-def'>{pokemon.stats?.[2].base_stat}</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="id-two">

                
                <div className="movements">
                    <h2>Movements</h2>
                    {pokemon.moves?.map(moves => (
                        <div>{moves.move.name}</div>
                    ))}
                    {/* pokemon.moves[0].move.name} */}
                </div>
                </div>
            </div>

        </div>
    );
};

export default PokedexId;