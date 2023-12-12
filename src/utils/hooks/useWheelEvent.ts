import { useEffect, WheelEventHandler } from 'react'

interface Params {
    onWheel: (event : WheelEvent) => unknown
}

export default function useWheelEvent({ onWheel }: Params) {

    useEffect(() => {
        document.addEventListener('wheel', onWheel)

        return () => document.removeEventListener('wheel', onWheel)
    }, [onWheel])
}