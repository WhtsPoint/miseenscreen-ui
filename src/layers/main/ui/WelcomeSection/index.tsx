'use client'

import { forwardRef, type RefObject } from 'react'
import { useScroll } from 'framer-motion'
import { WelcomeText } from '@/widgets/welcome'
import { Background } from '@/features/welcome'
import styles from './styles.module.scss'

const WelcomeSection = forwardRef<HTMLDivElement>((_params, ref) => {
    const { scrollYProgress } = useScroll({
        target: ref as RefObject<HTMLElement>,
        offset: ['0 0', '1 0']
    })

    return (<section ref={ref} className={styles.section}>
        <Background className={styles.background} />
        <WelcomeText scrollY={scrollYProgress} />
    </section>)
})

WelcomeSection.displayName = 'WelcomeSection'

export default WelcomeSection