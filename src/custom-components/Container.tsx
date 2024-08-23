import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className=" my-0 mx-auto max-w-screen-xl px-4 h-full">
            {children}
        </div>
    );
}

export default Container;