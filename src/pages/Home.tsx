import { useEffect, useState } from "react"
import { Menu, Result, Words } from "../Components/components"
import firstLevel from "../levelFirst.json"
import secondLevel from "../levelFirst.json"
import thirdLevel from "../levelFirst.json"
import React from "react"
import './home.css';
import { HomeProps } from "./home.props"



export const Home = ({ stop, setstep, step, PercentBar, question, value, changeValue, Next, Add, add, active, range, word, wordUa }: HomeProps): JSX.Element => {

    return (
        <div className="Home">
            <div className="Main">
                {stop != true ?
                    <Words
                        setstep={setstep}
                        data={firstLevel}
                        PercentBar={PercentBar}
                        question={question}
                        value={value}
                        onChange={changeValue}
                        changeValue={changeValue}
                        Next={Next}
                        Add={Add}
                        add={add}
                        active={active}
                        step={step}
                        word={word}
                        wordUa={wordUa}
                    ></Words>
                    : <Result add={add} PercentBar={PercentBar} range={range} step={step} setstep={setstep} />}
                {/* <div className="dictionaryBody">{add.map((item: {
                    id: number
                    word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,
                    wordUa: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
                }, index: number) => (
                    <div className="dictionary"><div key={item.id} className="dictionaryItem">{item.word} - {item.wordUa}
                    </div>
                        <div className="removeWord" onClick={(() => { removeWord(item.id) })}> x</div>
                    </div>

                ))}</div> */}
            </div>
        </div>
    );
}
export default Home
{/* <div >{add.map((item: { word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
    return <div key={add}>{item.word}</div>
})}</div> */}