import { create } from 'zustand'

export type Theme = 'transparent' | 'solid'

interface Store {
    theme: Theme,
    setTheme: (theme: Theme) => unknown
}

const useStore = create<Store>()((set) => ({
    theme: 'solid',
    setTheme: (theme: Theme) => set({ theme })
}))

export const useHeaderSettings = () => {
    return useStore((store) => store)
}
