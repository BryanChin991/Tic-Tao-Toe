import React from 'react'

const style = {
    // background: 'black',
    color: 'white',
    height: '200px',
    width: '200px',
    margin: '.1rem',
    fontSize: '8rem',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '1rem',
}

const Square = ({winning, onClick, value}) => (
    <button className={winning ? 'btn btn-success' : 'btn btn-dark'} onClick={()=>onClick()} style={style}>
        {value}
    </button>
)

export default Square
