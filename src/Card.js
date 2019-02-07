
import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, index, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        {feedback === 'hidden'? HIDDEN_SYMBOL : card}
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMismatched',
        'visible'
    ])
}

export default Card