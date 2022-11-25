import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import '../App'
import ReactPaginate from 'react-paginate';

const Pokedex = () => {

    const userName = useSelector(state => state.name);
    const [pokemon, setPokemon] = useState([]);
    const navegate = useNavigate();
    const [pokemonName, setPokemonName] = useState("")
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
            .then(res => setPokemon(res.data.results))
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data.results))
    }, [])
    // console.log(pokemon)
    console.log(types)

    const searchPokemon = () => {
        navegate(`/pokedex/${pokemonName.toLowerCase()}`)
    }
    const filterType = (e) => {
        const url = e.target.value
        axios.get(url)
            .then(res => setPokemon(res.data.pokemon))

    }
    //nuevo
    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = pokemon.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(pokemon.length / itemsPerPage);
    


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokemon.length;
        setItemOffset(newOffset);
    };
    return (
        <div>
            <div className="container">
                <h1 className='title'>Pokedex</h1>
                <p className='title pokedex'>Welcome {userName}, here you can find your favorite pokemon</p>
                <div>
                    <select name="" id="" onChange={filterType}>
                        <option value="">All pokemons</option>
                        {types.map(type => (
                            <option value={type.url} key={type.name}>{type.name}</option>
                        ))}

                    </select>
                    <div className="box">
                        <input type="text" placeholder='Search pokemon' value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
                        <button onClick={searchPokemon}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </div>

                <ul>
                    <div className="row">
                        {currentItems.map(pokemon => (
                            // <li key={pokemon.url}>{pokemon.url}</li>
                            <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                        ))}
                    </div>
                </ul>
             
                <>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< Previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active'
                    />
                </>
               


            </div>



        </div>
    );
};

export default Pokedex;