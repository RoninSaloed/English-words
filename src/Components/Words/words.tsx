import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./words.css"
import firstLevel from "../../levelFirst.json"
import { WordsProps } from "./words.props"
export const Words = ({ PercentBar, value, changeValue, Next, active, Add, add, step, setstep, word, wordUa }: WordsProps): JSX.Element => {
    const [vissible, setVisible] = useState("unvisible")
    const [display, setDisplay] = useState("displaynone")
    const [wordActive, setWordActive] = useState(false)
    const vissibleWord = () => {
        if (!wordActive) {
            setVisible("vissible")
            setDisplay("displayblock")
        }

        else {
            setVisible("unvisible")
            setDisplay("displaynone")
        }

        setWordActive(!wordActive)
    }
    return (
        <div className="word">
            <div>
                <div className="wordProgressBar">
                    <div style={{ width: `${PercentBar}%` }} className="wordProgress"></div>
                </div>
                <div className="wordFirstLayer">
                    <div className="wordSecondLayer">
                        <div className="wordThirdLayer">
                            <div className="wordFourthLayer">
                                <div>
                                    <div className={cn("wordTitle ")}>
                                        <div>{word}</div>
                                    </div>
                                    <div className="wordInput"><input onChange={changeValue} value={value} type="text" /></div>
                                    <div className="error">{active == false && <div className="wordError">Incorrect. Try again!</div>}</div>
                                    <div onClick={vissibleWord} className="hint">?</div>
                                    <div className={vissible}>
                                        <div className={display}>{wordUa}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wordBodyButtons">
                <button className="wordButtonAdd" onClick={Add}> <b>+</b> ADD TO DICTIONARY</button>
                <button className="wordButtonNext" onClick={Next}>NEXT</button>

            </div>
        </div>
    )
}