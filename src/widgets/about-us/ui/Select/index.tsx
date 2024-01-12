import { ObjectType } from '@/utils/types/ObjectType'
import { StaticImageData } from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import ArrowWithText from '@/utils/ui/ArrowWithText'
import { motion } from 'framer-motion'

interface Params<T extends string = string> {
    person: T,
    images: ObjectType<T, StaticImageData>,
    className?: string,
    onNext?: () => unknown,
    onPrev?: () => unknown
}

const calculateStyles = (delta: number) => {
    const padding = Math.abs(delta) * 50 + 'px'
    return {
        left: `${delta * -25}%`,
        padding: `${padding} ${padding} 0 ${padding}`,
        zIndex: Math.abs(delta) * -1,
        filter: `brightness(${Math.abs(delta) === 0 ? 1 : 0.3})`
    }
}

export default function Select<T extends string = string>(
    { person, onNext, onPrev, images, className }: Params<T>
) {
    const persons: T[] = Object.keys(images) as T[]
    const imagesData = Object.values(images) as StaticImageData[]
    const currentIndex = persons.indexOf(person)

    return (<div className={cl(styles.personSelect, className)}>
        <ArrowWithText onClick={onPrev} direction={'left'} text={'Back'} />
        <div className={styles.personSelect__images}>
            {imagesData.map(({ src }, index) => {
                const animation = calculateStyles(index - currentIndex)
                return <motion.img
                    initial={animation}
                    animate={animation}
                    key={index}
                    src={src}
                    className={styles.personSelect__images__image}
                    transition={{ duration: 0.5 }}
                    alt={''}
                />
            })}
        </div>
        <ArrowWithText onClick={onNext} text={'Next'} />
    </div>)
}