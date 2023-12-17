import { forwardRef, RefObject, useRef } from 'react'
import { Analytics, Eccomerce, ElSolution, HrSoftware, WebServices } from '@/features/header/stack'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './style.module.scss'

const scrollPoint = 0.8

const StackPage = forwardRef<HTMLSelectElement>((params, ref) => {
    const scrollBlockRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref as RefObject<HTMLSelectElement>,
        offset: ['0 1', '1 1']
    })
    const opacityProgress = useTransform(scrollYProgress, (value) => {
        console.log(value)
    })

    return (<div className={styles.scrollBlock}>
        <section ref={ref} className={styles.section}>
            <motion.div
                style={{ opacity: opacityProgress }}
                className={styles.section__animatable__position}
            >
                <Eccomerce style={{ gridArea: 'a' }} />
                <WebServices style={{ gridArea: 'b' }} />
                <ElSolution style={{ gridArea: 'd' }}/>
                <HrSoftware style={{ gridArea: 'e' }} />
                <Analytics style={{ gridArea: 'c' }}/>
            </motion.div>
        </section>
    </div>)
})

StackPage.displayName = 'StackPage'

export default StackPage