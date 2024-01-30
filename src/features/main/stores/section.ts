import { create } from 'zustand'

type OnTrigger = (section: string) => unknown

interface Store {
    add: (onTrigger: OnTrigger) => void,
    remove: (onTrigger: OnTrigger) => void,
    triggers: OnTrigger[]
}

const useStore = create<Store>()((set) => ({
    add: (onTrigger) => set(({ triggers }) => {
        return { triggers: triggers.includes(onTrigger) ? triggers : [...triggers, onTrigger] }
    }),
    remove: (onTrigger) => set(({ triggers }) => ({ triggers: triggers.filter((t) => t != onTrigger)})),
    triggers: []
}))

export const useSpecialSection = () => {
    const { triggers, ...other} = useStore((store) => store)

    const invoke = (section: string) => triggers.forEach((event) => event(section))
    
    return { invoke, ...other }
}