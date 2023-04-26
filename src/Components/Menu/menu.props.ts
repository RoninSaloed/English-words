import { Words } from './../Words/words';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    PercentBar: number
    add: any[]
    setAdd: any
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
    levelChangeSecond: any
    levelChangeFirst: any
    setVisible: any
    setDisplay: any
    display: string
    vissible: string
}