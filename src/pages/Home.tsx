import { useEffect, useState } from "react"
import { Menu, Words } from "../Components/components"
import data from "../text.json"
import React from "react"

function Home() {
    let [value, setValue] = React.useState<string | undefined>()
    const [step, setstep] = useState<number>(0)
    const [active, setActive] = useState<boolean>()
    let [add, setAdd] = useState<any>([])
    const question = data[step]
    const percentBar = Math.round((step / data.length) * 100)
    let arrWords: any = []
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
                {step != data.length ?
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
                    : <div>Молодець</div>}
            </div>
        </div>
    );
}
export default Home