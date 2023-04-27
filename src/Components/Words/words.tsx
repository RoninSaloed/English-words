import React, { useState } from "react"
import cn from "classnames"
import "./words.css"
import { WordsProps } from "./words.props"
export const Words = ({ PercentBar, value, changeValue, Next, active, Add, word, wordUa, setVisible, setDisplay, vissible, display }: WordsProps): JSX.Element => {

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

    }
    const Speak = () => {
        const speech = new SpeechSynthesisUtterance(word)
        speech.rate = 0.7
        speech.lang = "en-US"
        window.speechSynthesis.speak(speech);

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
                                    <div className="speech" onClick={Speak}></div>
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