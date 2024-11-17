"use client"
import * as React from "react"
import ReactCountryFlag from "react-country-flag"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

export function Language() {
    const router = useRouter();
    const localeActive = useLocale();
    const [transition, startTransition] = React.useTransition();


    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }


    return (
        <div>
            <select
                className="bg-transparent border-none h-10 w-10"
                value={localeActive}
                onChange={(e) => onSelectChange(e)}
            >
                <option value="en"><ReactCountryFlag countryCode="US" /></option>
                <option value="uk"><ReactCountryFlag countryCode="UA" /></option>
                <option value="es"><ReactCountryFlag countryCode="ES" /></option>
                <option value="de"><ReactCountryFlag countryCode="DE" /></option>
            </select>
        </div>
    )
}