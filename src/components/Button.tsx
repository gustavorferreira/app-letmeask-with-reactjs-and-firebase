import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss'

type BottonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutline?: boolean;
};

export function Button({ isOutline = false, ...props }: BottonProps) {
    return (
        <button className={`button ${isOutline ? 'outlined' : ''}`} {...props} />
    )
}