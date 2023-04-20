import { useEffect, useState } from "react"
import { Menu, Result, Words } from "../Components/components"
import firstLevel from "../levelFirst.json"
import secondLevel from "../levelFirst.json"
import thirdLevel from "../levelFirst.json"
import React from "react"
import './home.css';


interface addArr {
    word: string
    wordUa: string
    id: number
    [key: string]: any
}
export const Home = () => {
    let [value, setValue] = React.useState<string | undefined>()
    const [step, setstep] = useState<number>((JSON.parse(localStorage.getItem("step") || localStorage.step || 0)))
    const [active, setActive] = useState<boolean>()
    let [add, setAdd] = useState<addArr[]>((JSON.parse(localStorage.getItem("add") || localStorage.add || "[]")))
    const range = 11

    const question = firstLevel[step]

    const stop = step % range == 0 && step != 0
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const Next = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (value?.toLowerCase() == question.wordUa.toLowerCase()) {
            setstep(step + 1)
            setValue("")
            setActive(true)
        } else {
            setActive(false)
        }
    }
    const Add = () => {

        setAdd([...add, question])
    }
    const removeWord = (id: number): void => {
        const newAdd = add.filter((item) => item.id !== id)
        setAdd(newAdd)
    }
    function PercentBar(): number {
        const percentBar = ((step % range) / range) * 100;
        return percentBar
    }
    useEffect(() => {
        localStorage.setItem("add", JSON.stringify(add))
    }, [add])
    useEffect(() => {
        localStorage.setItem("step", JSON.stringify(step))
    }, [step])
    return (
        <div className="Home">

            <div className="Main">
                {stop != true ?
                    <Words
                        data={firstLevel}
                        PercentBar={PercentBar()}
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
                        step={step}
                    ></Words>
                    : <Result add={add} PercentBar={PercentBar()} range={range} step={step} setstep={setstep} />}
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