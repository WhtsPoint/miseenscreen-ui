import { useCallback, useState } from 'react'

export default function useLoading<T, V extends any[]>(callback: (...args: V) => Promise<T>) {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const wrappedCallback = useCallback(async (...args: V) => {
        setIsLoading(true)
        const result = await callback(...args)
        setIsLoading(false)

        return result
    }, [callback])

    return [wrappedCallback, isLoading] as const
}