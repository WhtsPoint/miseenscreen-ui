'use client'

import type { ObjectType } from '@/utils/types/ObjectType'
import type { StaticImageData } from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import ArrowWithText from '@/utils/ui/ArrowWithText'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Params<T extends string = string> {
    person: T,
    images: ObjectType<T, StaticImageData>,
    className?: string,
    onNext?: () => unknown,
    onPrev?: () => unknown,
    imagesChildren?: ReactNode
}

const calculateStyles = (delta: number) => {
    const isFirst = delta === 0
    const padding = `calc(100% - ${Math.abs(delta) * 30}px)`
    return {
        x: `${50 - delta * -25}%`,
        height: padding,
        position: isFirst ? 'static' : 'absolute',
        zIndex: (Math.abs(delta) + 1) * -1,
        filter: `brightness(${isFirst ? 1 : 0.3})`
    } as const
}

export default function Select<T extends string = string>(
    { person, onNext, onPrev, images, className, imagesChildren }: Params<T>
) {
    const persons: T[] = Object.keys(images) as T[]
    const imagesData = Object.values(images) as StaticImageData[]
    const currentIndex = persons.indexOf(person)

    return (<div className={cl(styles.personSelect, className)}>
        <ArrowWithText onClick={onPrev} direction={'left'} text={'Back'} />
        <div className={styles.personSelect__images}>
            {imagesChildren}
            {imagesData.map(({ src }, index) => {
                const animation = calculateStyles(index - currentIndex)
                return <motion.div
                    key={index}
                    initial={animation}
                    animate={animation}
                    className={styles.personSelect__images__image}
                    transition={{ duration: 0.5 }}
                >
                    <motion.img key={index} src={src} alt={''}/>
                </motion.div>
            })}
        </div>
        <ArrowWithText onClick={onNext} text={'Next'} />
    </div>)
}