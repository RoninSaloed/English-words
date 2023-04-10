import { useEffect, useState } from "react"
import { Menu, Result, Words } from "../Components/components"
import data from "../text.json"
import React from "react"
import Dictionary from "./Dictionary"

function Home() {
    let [value, setValue] = React.useState<string | undefined>()
    const [step, setstep] = useState<number>(0)
    const [active, setActive] = useState<boolean>()
    let [add, setAdd] = useState<any>([])
    const question = data[step]
    const stop = step % 4 == 0 && step != 0
    const percentBar = Math.round((step / 4) * 100)
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const Next = (e: React.MouseEventHandler<HTMLButtonElement>) => {
        if (value?.toLowerCase() == question.wordUa.toLowerCase()) {
            setstep(step + 1)
            setValue("")
            setActive(true)
        } else {
            setActive(false)
        }
    }

    const Add = (e: React.MouseEventHandler<HTMLButtonElement>) => {
        setAdd([...add, question])
        return add
    }

    return (
        <div className="App">
            <div className="Main">
                {stop != true ?
                    <Words
                        data={data}
                        percentBar={percentBar}
                        question={question}
                        word={question.word}
                        wordUa={question.wordUa}
                        value={value}
                        onChange={changeValue}
                        onClick={Next}
                        changeValue={changeValue}
                        Next={Next}
                        Add={Add}
                        add={add}
                        active={active}
                    ></Words>
                    : <Result step={step} setstep={setstep} />}
                <div >{add.map((item: { word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
                    return <div key={add}>{item.word}</div>
                })}</div>
            </div>
        </div>
    );
}
export default Home