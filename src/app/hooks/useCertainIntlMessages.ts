import { useMessages } from 'next-intl'

export default function useCertainMessages(keys: string[]) {
    const messages = useMessages()

    return (Object.fromEntries(Object.entries(messages).filter(([key]) => {
        return keys.includes(key)
    })))
}