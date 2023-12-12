import { useEffect, WheelEventHandler } from 'react'

export default function useSceneEvent() {

    useEffect(() => {
        const onWheel = (event: WheelEvent) => {
            console.log(event)
        }

        return () => document.removeEventListener('wheel', onWheel)
    }, [])
}