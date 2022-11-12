import React from 'react';
import colorNames from 'colornames';
import { useRef } from 'react';

const Input = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
    const inputRef = useRef();

    return (
        <form className="colorForm" onSubmit={(event) => event.preventDefault()}>
            <label className="offscreen" htmlFor="colorInput">
                Add Color Name:
            </label>
            <input
                autoFocus
                ref={inputRef}
                id="colorInput"
                type="text"
                placeholder="Add color name"
                required
                value={color}
                onChange={(event) => {
                    setColor(event.target.value)
                    setHexValue(colorNames(event.target.value))
                }}
            />
            <button
                type="button"
                onClick={() => {
                    setIsDarkText(!isDarkText);
                    inputRef.current.focus();
                }}
            >
                Toggle text color
            </button>
        </form>
    )
}

export default Input