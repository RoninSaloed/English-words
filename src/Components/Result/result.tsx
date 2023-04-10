import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./result.css"
import data from "../../text.json"
import { ResultProps } from "./result.props"
import { Words } from "../components"
export const Result = ({ step, setstep }: ResultProps): JSX.Element => {
    const Previously = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step - 4)

    }
    const Continue = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step + 1)

    }

    console.log(step)
    return (
        <div className="result">
            <button onClick={Previously}>previous</button>
            <button onClick={Continue}>Continue</button>
            {step}
        </div>
    )
}