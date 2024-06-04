import React from 'react'
import './css/PokeCellStyles.css'

export const PokeCell = ({ pokeClass, handleOnClick }) => {
    return (
        <button onClick={() => handleOnClick(pokeClass + 1)} className='cell-btn'>
            {/* In ES6, you only use `backquote` (rightCTRL + tab) for $ in src instead of 'singlequote'  */}
            <img src={`https://raw.githubusercontent.com/jaylynch/pokemoji/master/img/${pokeClass + 1}.png`} alt='' />
        </button>
    )
}
