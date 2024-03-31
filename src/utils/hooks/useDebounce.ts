import { useRef } from 'react'

export default function useDebounce<T, V extends any[]>(callback: (...args: V) => unknown, delay: number) {
    const timerRef = useRef<NodeJS.Timeout>()

    return (...args: V) => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => callback(...args), delay)
    }
}