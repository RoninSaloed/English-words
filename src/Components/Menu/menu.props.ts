import { Words } from './../Words/words';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    add: any[]
    Add: React.MouseEventHandler<HTMLButtonElement>
}