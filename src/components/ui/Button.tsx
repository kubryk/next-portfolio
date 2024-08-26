import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={cn('py-3 px-16 bg-indigo-600 rounded-xl text-white text-lg flex items-center justify-center', className)}>
            {children}
        </button>
    )
}

export default Button;