import { useEffect, useRef } from 'react'

interface Params {
    onClose: () => unknown
}

export default function useSelectClosing<T extends HTMLElement>({ onClose }: Params) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if(!ref?.current?.contains(event.target as Node)) {
                onClose()
            }
        }

        window.addEventListener('click', onClick)
        return () => window.removeEventListener('click', onClick)
    }, [onClose, ref])

    return ref
}