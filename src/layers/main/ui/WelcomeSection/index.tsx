'use client'

import styles from './style.module.scss'
import { forwardRef, RefObject } from 'react'
import { useScroll } from 'framer-motion'
import { WelcomeText } from '../../../../widgets/welcome'
import { LightScene } from '../../../../widgets/welcome'

const WelcomeSection = forwardRef<HTMLDivElement>((_params, ref) => {
    const { scrollYProgress } = useScroll({
        target: ref as RefObject<HTMLElement>,
        offset: ['0 0', '1 0']
    })

    return (<section ref={ref} className={styles.section}>
        <LightScene scrollY={scrollYProgress} />
        <WelcomeText scrollY={scrollYProgress} />
    </section>)
})

WelcomeSection.displayName = 'WelcomeSection'

export default WelcomeSection