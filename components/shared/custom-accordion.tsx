"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { FiChevronDown } from "react-icons/fi"

type AccordionContextType = {
    value: string | null
    onChange: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)
const ItemContext = createContext<string | null>(null)

export function Accordion({
    type = "single",
    collapsible = false,
    defaultValue,
    className = "",
    children,
}: {
    type?: "single" | "multiple"
    collapsible?: boolean
    defaultValue?: string
    className?: string
    children: ReactNode
}) {
    const [value, setValue] = useState<string | null>(defaultValue || null)

    const onChange = (itemValue: string) => {
        if (type === "single") {
            if (collapsible && value === itemValue) {
                setValue(null)
            } else {
                setValue(itemValue)
            }
        }
    }

    return (
        <AccordionContext.Provider value={{ value, onChange }}>
            <div className={`space-y-1 ${className}`}>{children}</div>
        </AccordionContext.Provider>
    )
}

export function AccordionItem({
    value,
    className = "",
    children,
}: {
    value: string
    className?: string
    children: ReactNode
}) {
    return (
        <ItemContext.Provider value={value}>
            <div className={`border-b ${className}`}>{children}</div>
        </ItemContext.Provider>
    )
}

export function AccordionTrigger({
    className = "",
    children,
}: {
    className?: string
    children: ReactNode
}) {
    const context = useContext(AccordionContext)
    if (!context) {
        throw new Error("AccordionTrigger must be used within an Accordion")
    }

    const { value, onChange } = context
    const itemValue = useContext(ItemContext)

    if (!itemValue) {
        throw new Error("AccordionTrigger must be used within an AccordionItem")
    }

    const isOpen = value === itemValue

    return (
        <button
            type="button"
            className={`flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline ${className}`}
            onClick={() => onChange(itemValue)}
            aria-expanded={isOpen}
        >
            {children}
            <FiChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />

        </button>
    )
}

export function AccordionContent({
    className = "",
    children,
}: {
    className?: string
    children: ReactNode
}) {
    const context = useContext(AccordionContext)
    if (!context) {
        throw new Error("AccordionContent must be used within an Accordion")
    }

    const { value } = context
    const itemValue = useContext(ItemContext)

    if (!itemValue) {
        throw new Error("AccordionContent must be used within an AccordionItem")
    }

    const isOpen = value === itemValue

    return (
        <div className={`overflow-hidden transition-all ${isOpen ? "max-h-[1000px] pb-4" : "max-h-0"}`}>
            <div className={className}>{children}</div>
        </div>
    )
}
