import React, { useEffect, useState } from "react"
import cn from "classnames"
import "./result.css"
import { ResultProps } from "./result.props"
import { Words } from "../components"
export const Result = ({ step, setstep, range, PercentBar, add }: ResultProps): JSX.Element => {
    const Previously = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step - range)

    }
    const Continue = (e: React.MouseEvent<HTMLButtonElement>) => {
        setstep(step + 1)

    }
    return (
        <div className="result">
            <div className="resultTitle">You looked at {step} words</div>
            <div className="resultButtons">
                <button className="resultPreviously" onClick={Previously}>Previously</button>
                <button className="resultContinue" onClick={Continue}>Continue</button>
            </div>
        </div>
    )
}