import { create } from 'zustand'

type Callback = (token: string) => unknown

interface Store {
    isOpened: boolean,
    onComplete?: Callback | null,
    open: (onComplete: Callback) => void,
    close: () => void
}

const useStore = create<Store>()((set) => ({
    isOpened: false,
    open: (onComplete) => set({ onComplete, isOpened: true }),
    close: () => set({ isOpened: false, onComplete: null })
}))


export const useReCaptchaModal = () => {
    return useStore((store) => store)
}