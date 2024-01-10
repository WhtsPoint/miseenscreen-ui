import { CodingBackground, Details, Title } from '@/features/cases'
import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import StickyScroll from '@/utils/ui/StickyScroll'

export default function CasesSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] })
    //const scrollYProgress = useMotionValue(0)
    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0])

    return (<StickyScroll onScroll={(value) => scrollYProgress.set(value)}>
        <motion.section style={{ opacity }} ref={ref} className={styles.casesSection}>
            <CodingBackground
                className={styles.casesSection__background}
                scrollProgress={scrollYProgress}
            />
            <Title scrollProgress={scrollYProgress} />
            <Details scrollProgress={scrollYProgress} />
        </motion.section>
    </StickyScroll>)
}