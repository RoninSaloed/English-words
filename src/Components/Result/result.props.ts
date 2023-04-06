import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ResultProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    percentBar: number,
    word: string
    wordUa: string
    question: object,
    value: string | undefined,
    onChange: any,
    onClick: any,
    changeValue: React.ChangeEvent<HTMLInputElement> | any
    Next: any
    active: boolean | undefined,
    data: object,

}