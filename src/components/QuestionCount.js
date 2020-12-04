import React from 'react'
import { data } from './data'

export default function QuestionCount(props) {
    return (
        <div className="questionCounterContainer">
            <span>{`Question ${props.id + 1}  out of ${data.length}  `}</span>
        </div>
    )
}
