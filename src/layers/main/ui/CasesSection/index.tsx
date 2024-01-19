import { CodingBackground, Details, Title } from '@/features/cases'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './styles.module.scss'

export default function CasesSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] })
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

    return (<motion.section ref={ref} style={{ opacity }} className={styles.casesSection}>
        <CodingBackground
            className={styles.casesSection__background}
            scrollProgress={scrollYProgress}
        />
        <Title scrollProgress={scrollYProgress} />
        <Details scrollProgress={scrollYProgress} />
    </motion.section>)
}