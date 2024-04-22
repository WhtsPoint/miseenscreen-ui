import { type RefObject, useCallback, useEffect, useRef } from 'react'
import { useSpecialSection } from '@/features/main'

interface Params {
    ref: RefObject<HTMLElement>
    section: string
}

export default function useCertainSection({ ref, section }: Params) {
    const sectionRef = useRef(section)
    const { add, remove } = useSpecialSection()

    const moveToSection = useCallback((search: string) => {
        if (sectionRef.current === search) {
            ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [ref])

    useEffect(() => moveToSection(document.location.hash.slice(1)), [moveToSection])

    useEffect(() => {
        add(moveToSection)
        return () => remove(moveToSection)
    }, [add, remove, moveToSection])
}