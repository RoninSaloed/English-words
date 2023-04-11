import { useEffect, useState } from "react"
import { Menu, Result, Words } from "../Components/components"
import data from "../text.json"
import React from "react"

export const Home = () => {
    let [value, setValue] = React.useState<string | undefined>()
    const [step, setstep] = useState<number>(0)
    const [active, setActive] = useState<boolean>()
    const [add, setAdd] = useState<any>([])
    const range = 4
    const question = data[step]
    const stop = step % range == 0 && step != 0
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
    useEffect(() => {
        localStorage.setItem('addDictionary', JSON.stringify(add))

    }, [add])


    console.log(add)
    function PercentBar(): number {
        const percentBar = ((step % range) / range) * 100;
        return percentBar
    }
    return (
        <div className="App">
            <div className="Main">
                {stop != true ?
                    <Words
                        data={data}
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
                    ></Words>
                    : <Result PercentBar={PercentBar()} range={range} step={step} setstep={setstep} />}

            </div>
        </div>
    );
}
export default Home
{/* <div >{add.map((item: { word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
    return <div key={add}>{item.word}</div>
})}</div> */}