'use client'
import { createContext, MutableRefObject, ReactNode, useRef } from 'react';
interface INavigationContext {
    name: string
    ref: MutableRefObject<HTMLDivElement | null>
}

export const NavigationContext = createContext<INavigationContext[] | null>(null);

const NavigationContextProvider = ({ children }: { children: ReactNode }) => {
    const navLinks = [
        {
            name: 'About',
            ref: useRef<HTMLDivElement | null>(null)
        },
        {
            name: 'Projects',
            ref: useRef<HTMLDivElement | null>(null)
        },
        {
            name: 'Skills',
            ref: useRef<HTMLDivElement | null>(null)
        },
        {
            name: 'Contact',
            ref: useRef<HTMLDivElement | null>(null)
        }];
    return (
        <NavigationContext.Provider value={navLinks}>
            {children}
        </NavigationContext.Provider>
    )
}
export default NavigationContextProvider;

