import { create } from 'zustand'

interface Store {
    isLoaded: boolean,
    onLoad: () => void
}

const useStore = create<Store>((set) => ({
    isLoaded: false,
    onLoad: () => set({ isLoaded: true })
}))

export const useCaptchaLoading = () => {
    return useStore((store) => store)
}