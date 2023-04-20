import React, { useEffect, useState } from "react"
import { DictionaryProps } from "./dictionary.props"
import './dictionary.css';
interface addArr {
    word: string
    wordUa: string
    id: number
    [key: string]: any
}

export const Dictionary = ({ }: DictionaryProps): JSX.Element => {
    const [arr, setArr] = useState<addArr[]>((JSON.parse(localStorage.getItem("add") || localStorage.add)))
    const removeWord = (id: number): void => {
        const newAdd = arr.filter((item) => item.id !== id)
        setArr(newAdd)
    }
    return (
        <div className="dictionary">
            <table className="dictionaryBody">
                <tr className="dictionaryTitles">
                    <th className="titleEng">ENG</th>
                    <th className="titleUa">UA</th>
                </tr>
                {arr.map((item: {
                    id: number
                    word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,
                    wordUa: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
                }) => {

                    return <tr className="dictionaryItem">  <td>{item.word}</td>  <td>{item.wordUa}</td> <div onClick={(() => { removeWord(item.id) })} className="removeWord"></div></tr>
                })}
            </table>
        </div>
    )
}
export default Dictionary