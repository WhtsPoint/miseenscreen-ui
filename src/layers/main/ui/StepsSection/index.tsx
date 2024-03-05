'use client'

import styles from './styles.module.scss'
import { TitleBlock } from '@/features/steps'
import { useInView, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FilledPoints } from '@/features/steps'
import StickyScroll from '@/utils/ui/StickyScroll'
import ArrowWithText from '@/utils/ui/ArrowWithText'
import useWidth from '@/utils/hooks/useWidth'
import { useTranslations } from 'next-intl'

export default function StepsSection() {
    const t = useTranslations('steps')
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%', once: true })
    const position = useMotionValue<number>(0)
    const scrollProgress = useMotionValue<number>(0)
    const moveProgress = useMotionValue<number>(0)
    const [isFirst, setIsFirst] = useState<boolean>(true)
    const width = useWidth()

    const updateProgress = () => {
        position.set(
            width && width > 1024 ?
            Math.round(scrollProgress.get()) :
            moveProgress.get()
        )
    }

    useEffect(updateProgress, [updateProgress])
    useMotionValueEvent(scrollProgress, 'change', updateProgress)
    useMotionValueEvent(moveProgress, 'change', updateProgress)
    useMotionValueEvent(position, 'change', (value) => setIsFirst(value === 0))

    const onMove = () => moveProgress.set(moveProgress.get() ? 0 : 1)

    return (<StickyScroll onScroll={(val) => scrollProgress.set(val)} className={styles.stickyScroll}>
        <section ref={ref} className={styles.stickyScroll__stepSection}>
            <TitleBlock className={styles.stickyScroll__stepSection__title} />
            <FilledPoints
                position={position}
                isInView={isInView}
                className={styles.stickyScroll__stepSection__points}
            />
            <ArrowWithText
                blockClassName={styles.stickyScroll__stepSection__arrow}
                onClick={onMove}
                text={t(isFirst ? 'arrow-down' : 'arrow-up')}
                direction={isFirst ? 'down' : 'up'}
            />
        </section>
    </StickyScroll>)
}