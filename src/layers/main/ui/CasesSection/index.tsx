import { CodingBackground, Details, Title } from '@/features/cases'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import useCertainSection from '@/utils/hooks/useCertainSection'

export default function CasesSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] })
    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0])

    useCertainSection({ ref, section: 'cases' })

    return (<motion.section ref={ref} style={{ opacity }} className={styles.casesSection}>
        <CodingBackground
            className={styles.casesSection__background}
            scrollProgress={scrollYProgress}
        />
        <Title scrollProgress={scrollYProgress} />
        <Details scrollProgress={scrollYProgress} />
    </motion.section>)
}