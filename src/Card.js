
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        {feedback === 'hidden'? HIDDEN_SYMBOL : card}
    </div>
)

export default Card