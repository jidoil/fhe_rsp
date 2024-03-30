import React from 'react';


function Box({ letter, isSelected, isHovered, onClick, onMouseEnter, onMouseLeave }) {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: isSelected ? 'rgba(0, 128, 0, 0.5)' : isHovered ? 'rgba(0, 0, 128, 0.5)' : 'rgba(128, 128, 128, 0.5)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5rem',
        color: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        margin: '10px'
    };

    return (
        <div
            style={boxStyle}
            onClick={() => onClick(letter)}
            onMouseEnter={() => onMouseEnter(letter)}
            onMouseLeave={() => onMouseLeave()}
        >
            {letter}
        </div>
    );
}

export default Box;
