import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./result.css"
import data from "../../text.json"
import { ResultProps } from "./result.props"
import { Words } from "../components"
export const Result = ({ step, setstep, range, PercentBar }: ResultProps): JSX.Element => {
    const Previously = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step - range)

    }
    const Continue = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step + 1)

    }

    return (
        <div className="result">
            <button onClick={Previously}>previously</button>
            <button onClick={Continue}>Continue</button>
            {step}
        </div>
    )
}