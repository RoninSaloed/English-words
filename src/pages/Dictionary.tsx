import React, { useEffect, useState } from "react"
import { DictionaryProps } from "./dictionary.props"

export const Dictionary = ({ add }: DictionaryProps): JSX.Element => {

    // const [arr, setarr] = useState(() => JSON.parse(localStorage.getItem("addDictionary") || "[]"))

    return (
        <div className="dictionary">
            {/* <div >{arr.map((item: {
                word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,
                wordUa: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
            }) => {
                return <div >{item.word} - {item.wordUa}</div>
            })}</div> */}
        </div>
    )
}
export default Dictionary