import { useState } from 'react'

interface Params {
    onLeft?: () => unknown,
    onRight?: () => unknown,
    elementsCount: number,
    initElement?: number
}

export default function useCarousel({ onLeft, onRight, elementsCount, initElement = 0 }: Params) {
    const [currentElement, setCurrentElement] = useState<number>(initElement)

    const onLeftWrap = () => {
        setCurrentElement((prev) => Math.max(0, prev - 1))
        onLeft?.()
    }

    const onRightWrap = () => {
        setCurrentElement((prev) => Math.min(elementsCount - 1, prev + 1))
        onRight?.()
    }

    const choose = (index: number) => {
        if (index >= elementsCount || index < 0) {
            throw new Error('Index out of range')
        }

        setCurrentElement(index)
    }

    return { currentElement, onLeft: onLeftWrap, onRight: onRightWrap, choose } as const
}