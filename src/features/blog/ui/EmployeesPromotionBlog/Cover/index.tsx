'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './styles.module.scss'
import aImage from '@/utils/assets/images/blog/employees-promotion/cover/a.png'
import bImage from '@/utils/assets/images/blog/employees-promotion/cover/b.png'
import cImage from '@/utils/assets/images/blog/employees-promotion/cover/c.png'
import dImage from '@/utils/assets/images/blog/employees-promotion/cover/d.png'
import eImage from '@/utils/assets/images/blog/employees-promotion/cover/e.png'

const animationWithView = (isInView: boolean) => (delay: number) => ({
    initial: { opacity: 0 },
    variants: { view: { opacity: 1 } },
    transition: { delay, duration: 1 },
    animate: isInView && 'view'
})

export default function Cover() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animation = animationWithView(isInView)

    return (<motion.div ref={ref} className={styles.cover}>
        <motion.div style={{ gridArea: 'a' }} {...animation(0.3)} className={styles.element}>
            <Image fill src={aImage.src} sizes={'40vw'} alt={'Left cover image'}/>
        </motion.div>
        <motion.div style={{ gridArea: 'b' }} {...animation(0.6)} className={styles.element}>
            <Image fill src={bImage.src} sizes={'20vw'} alt={'Center cover image'}/>
        </motion.div>
        <motion.div style={{ gridArea: 'c' }} {...animation(0.9)} className={styles.element}>
            <Image fill src={cImage.src} sizes={'20vw'} alt={'Center cover image'}/>
        </motion.div>
        <motion.div style={{ gridArea: 'd' }} {...animation(1.2)} className={styles.element}>
            <Image fill src={dImage.src} sizes={'20vw'} alt={'Center cover image'}/>
        </motion.div>
        <motion.div style={{ gridArea: 'e' }} {...animation(1.5)} className={styles.element}>
            <Image fill src={eImage.src} sizes={'40vw'} alt={'Right cover image'}/>
        </motion.div>
    </motion.div>)
}