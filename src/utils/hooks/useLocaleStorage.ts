import { useEffect, useState } from 'react'

export default function useLocalStorage(key: string) {
    const [value, setValue] = useState<string|null>(null)

    useEffect(() => setValue(localStorage.getItem(key)), [key])

    const updateStorage = (newValue: string) => {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }

    return [value, updateStorage] as const
}