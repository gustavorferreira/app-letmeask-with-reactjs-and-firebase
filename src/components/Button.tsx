import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss'

type BottonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: BottonProps) {

    return (
        <button className="button" {...props} />
    )
}