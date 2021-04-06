import React from 'react'
import { data } from './data'

export default function QuestionCount(props) {
    return (
        <div className="questionCounterContainer">
            <div> {`Question`} <span>{`${props.id + 1}`}  </span>{`/ ${data.length}  `}</div>
        </div>
    )
}
