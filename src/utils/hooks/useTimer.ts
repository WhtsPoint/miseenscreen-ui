import { useEffect, useRef } from 'react'

export default function useTimer(callback: () => unknown, ms: number) {
    const callbackRef = useRef(callback)
    const msRef = useRef(ms)

    useEffect(() => {
        const t = setTimeout(callbackRef.current, msRef.current)

        return () => clearTimeout(t)
    }, [callbackRef, msRef])
}