import React from 'react'

const Square = ({ color, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: `${color}`,
                color: isDarkText ? '#000' : '#FFF'
            }}
        >
            <p>{color ? color : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Square.defaultProps = {
    color: 'Empty Color Value'
}

export default Square