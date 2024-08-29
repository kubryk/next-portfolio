import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, className, ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
        <button
            {...rest}
            ref={ref}
            className={cn('py-3 px-16 bg-indigo-600 rounded-xl text-white text-lg flex items-center justify-center', className)}
        >
            {children}
        </button>
    )
}

export const MButton = motion(forwardRef(Button));