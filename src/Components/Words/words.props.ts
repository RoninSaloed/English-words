import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WordsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    percentBar: number,
    add: any[]
    word: string
    wordUa: string
    question: object,
    value: string | undefined,
    onChange: any,
    onClick: any,
    changeValue: React.ChangeEvent<HTMLInputElement> | any
    Next: any
    Add: any
    active: boolean | undefined,
    data: object,

}