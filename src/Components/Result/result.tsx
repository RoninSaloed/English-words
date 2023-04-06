import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./result.css"
import data from "../../text.json"
import { ResultProps } from "./result.props"
export const Result = ({ percentBar, value, changeValue, Next, active, word }: ResultProps): JSX.Element => {


    return (
        <div className="word">
            <div>
                <div className="wordProgressBar">
                    <div style={{ width: `${percentBar}%` }} className="wordProgress"></div>
                </div>
                <div className={cn("wordTitle ")}>
                    {word}
                </div>
                <div className="wordInput"><input onChange={changeValue} value={value} type="text" /></div>
                {active == false && <div className="wordError">Не правильно</div>}
                <button className="wordButton" onClick={Next}>Next</button>
            </div>
        </div>
    )
}