import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./words.css"
import data from "../../text.json"
import { WordsProps } from "./words.props"
export const Words = ({ percentBar, value, changeValue, Next, active, word, wordUa, Add, add }: WordsProps): JSX.Element => {


    return (
        <div className="word">
            <div>
                <div className="wordProgressBar">
                    <div style={{ width: `${percentBar}%` }} className="wordProgress"></div>
                </div>
                <div className={cn("wordTitle ")}>
                    {word}
                    {wordUa}
                </div>
                <div className="wordInput"><input onChange={changeValue} value={value} type="text" /></div>
                {active == false && <div className="wordError">Не правильно</div>}
                <div>
                    <button className="wordButton" onClick={Next}>Next</button>
                    <button className="wordButton" onClick={Add}>Add</button>
                </div>

            </div>

        </div>
    )
}