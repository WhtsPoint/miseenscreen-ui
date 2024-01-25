import { useEffect } from 'react'


export default function useOnUrlHashChange(callback: () => unknown) {
    useEffect(() => {
        window.addEventListener('hashchange', callback)
        return () => window.removeEventListener('hashchange', callback)
    }, [callback])
}