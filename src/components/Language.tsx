"use client"
import * as React from "react"
import ReactCountryFlag from "react-country-flag"
import { Button } from "./ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslations } from "next-intl"



const languages = [
    {
        value: "us",
        label: "English",
    },
    {
        value: "uk-UA",
        label: "Ukrainian",
    },
    {
        value: "es",
        label: "Spanish",
    },
]

export function Language() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")



    return (
        <Popover open={open} onOpenChange={setOpen}>
            {/* <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-fit justify-between p-3"
                >

                    {locale &&
                        <ReactCountryFlag
                            countryCode={locale}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                            }}
                        />}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-fit p-0">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {languages.map((language) => {
                                if (language.value != locale) {
                                    return (
                                        <CommandItem
                                            key={language.value}
                                            value={language.value}
                                            onSelect={(currentValue) => {
                                                // setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                                setLocale(currentValue)
                                            }}
                                        >
                                            <ReactCountryFlag
                                                countryCode={language.value}
                                                svg
                                                style={{
                                                    width: '2em',
                                                    height: '2em',
                                                }}
                                                title={language.label}
                                            />
                                        </CommandItem>
                                    )
                                }
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent> */}
        </Popover>
    )
}