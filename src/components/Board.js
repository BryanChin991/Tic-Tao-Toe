import React from 'react'
import Square from './Square'

const style = {
    width : '625px',
    height: '250px',
    marginTop: '10px',
    margin: 'auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
}

const Board = ({winning, Sqaures, onClick}) => {
    return(
        <div style={style}>
            {Sqaures.map((s, i) =>(
                <Square winning={winning} key={i} value={s} onClick={()=>onClick(i)} />
                )
            )}
        </div>
    )
}
export default Board
