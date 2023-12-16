import { create } from 'zustand'

type Theme = 'transparent' | 'solid'

interface Store {
    theme: Theme,
    setTheme: (theme: Theme) => unknown
}

const useStore = create<Store>()((set) => ({
    theme: 'transparent',
    setTheme: (theme: Theme) => set({ theme })
}))

export const useHeaderSettings = () => {
    const theme = useStore(({ theme }) => theme)
    const setTheme = useStore(({ setTheme }) => setTheme)

    return { theme, setTheme }
}
