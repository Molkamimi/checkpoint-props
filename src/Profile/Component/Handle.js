import React from 'react'

const Handle =(props) => {
    return (
        <div>
            <button onClick={() => props.handleClick(props.name)}> cliquez sur moi </button>
        </div>
    );
} ;
export default Handle;