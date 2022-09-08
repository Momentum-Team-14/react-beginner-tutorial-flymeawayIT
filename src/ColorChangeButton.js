import React from 'react'

function ColorChangeButton(props) {
    return (
        <button className={props.color} onClick={() => props.setColor(props.Color)}>{props.color}</button>
    )
}

export default ColorChangeButton