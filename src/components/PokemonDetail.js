import React from 'react'
import './css/PokemonDetailStyles.css'

export const PokemonDetail = ({ pokemon }) => {

    const { id, name, type, sprite, height, weight } = pokemon
    return (
        <section className='poke-container'>
            <img src={sprite} className='poke-img' alt={sprite} />
            <div className='detail-container'>
                <h3 className='poke-name'>ID: {id} - {name}</h3>
                <p className='poke-info'>TYPE: {type}</p>
                <p className='poke-info'>HEIGHT: {height}</p>
                <p className='poke-info'>WEIGHT: {weight}</p>
            </div>
        </section>
    )
}
