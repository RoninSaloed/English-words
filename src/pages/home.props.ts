import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    PercentBar: number
    add: any[]
    question: object,
    value: string | undefined,
    changeValue: React.ChangeEvent<HTMLInputElement> | any
    Next: React.MouseEventHandler<HTMLButtonElement>
    Add: React.MouseEventHandler<HTMLButtonElement>
    active: boolean | undefined,
    step: number
    setstep: any
    stop: boolean
    range: number
    word: string
    wordUa: string
    setVisible: any
    setDisplay: any
    display: string
    vissible: string
}