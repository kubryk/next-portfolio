import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { }

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn('my-0 mx-auto max-w-screen-xl px-4 h-full', className)}>
            {children}
        </div>
    );
}

export default Container;