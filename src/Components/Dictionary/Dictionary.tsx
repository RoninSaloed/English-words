import React, { useEffect, useState } from "react"
import { DictionaryProps } from "./dictionary.props"
import './dictionary.css';
interface addArr {
    word: string
    wordUa: string
    id: number
    [key: string]: any
}

export const Dictionary = ({ add, setAdd }: DictionaryProps): JSX.Element => {
    const removeWord = (id: number): void => {
        const newAdd = add.filter((item) => item.id !== id)
        setAdd(newAdd)
    }
    return (
        <div className="dictionary">
            <table className="dictionaryBody">
                <tr className="dictionaryTitles">
                    <th className="titleEng">ENG</th>
                    <th className="titleUa">UA</th>
                </tr>
                {add.map((item: {
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