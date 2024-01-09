import { CodingBackground, Details, Title } from '@/features/cases'
import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import styles from './styles.module.scss'

export default function CasesSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1 0'] })

    return (<section ref={ref} className={styles.casesSection}>
        <CodingBackground
            className={styles.casesSection__background}
            scrollProgress={scrollYProgress}
        />
        <Title scrollProgress={scrollYProgress} />
        <Details scrollProgress={scrollYProgress} />
    </section>)
}