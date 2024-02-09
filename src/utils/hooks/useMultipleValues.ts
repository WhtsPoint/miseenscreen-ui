import { useState } from 'react'

type Return<T> = [T[], (value: T) => void]

export default function useMultipleValues<T extends string>(initValue: T[]): Return<T> {
    const [values, setValues] = useState<T[]>([])

    const onChange = (value: T) => {
        setValues((prev) => {
            return prev.includes(value)
                ? prev.filter((param) => param !== value)
                : [...prev, value]
        })
    }


    return [values, onChange]
}