import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WordsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    PercentBar: number
    add: any[]
    word: string
    wordUa: string
    question: object,
    value: string | undefined,
    changeValue: React.ChangeEvent<HTMLInputElement> | any
    Next: React.MouseEventHandler<HTMLButtonElement>
    Add: React.MouseEventHandler<HTMLButtonElement>
    active: boolean | undefined,
    data: object,
    step: number
    setstep: any,
    setVisible: any
    setDisplay: any
    display: string
    vissible: string


}