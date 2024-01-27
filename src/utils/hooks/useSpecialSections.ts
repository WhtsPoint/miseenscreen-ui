import { ObjectType } from '@/utils/types/ObjectType'
import { createRef, RefObject, useCallback, useState } from 'react'

type Refs<T extends string, V extends HTMLElement> = ObjectType<T, RefObject<V>>

export default function useSpecialSection
    <V extends HTMLElement, T extends string = string>
(sections : T[]) {
    const [refs] = useState<Refs<T, V>>(() => {
        let sectionsRefs = {}
        sections.forEach((section) => {
            sectionsRefs = { ...sectionsRefs, [section]: createRef<V>() }
        })
        return sectionsRefs as Refs<T, V>
    })

    const move = useCallback((section: T) => {
        refs[section]?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [refs])

    const moveByLink = useCallback(() => {
        const section = document.location.hash.slice(1) as T
        if (sections.includes(section)) move(section)
    }, [move, sections])

    return { refs, moveByLink }
}