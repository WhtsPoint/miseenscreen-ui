'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './styles.module.scss'
import aImage from '@/utils/assets/images/blog/what2/cover/a.png'
import bImage from '@/utils/assets/images/blog/what2/cover/b.png'
import cImage from '@/utils/assets/images/blog/what2/cover/c.png'
import dImage from '@/utils/assets/images/blog/what2/cover/d.png'
import spotlightImage from '@/utils/assets/images/stack/particles/spotlight.png'
import Particle from '@/utils/ui/Particle'

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
        <motion.div {...animation(0)} className={styles.element}>
            <Image fill src={aImage.src} sizes={'33.3vw'} alt={'Left cover image'}/>
        </motion.div>
        <motion.div {...animation(0.5)} className={styles.element}>
            <Image fill src={bImage.src} sizes={'33.3vw'} alt={'Center cover image'}/>
        </motion.div>
        <motion.div {...animation(1)} className={styles.element}>
            <Image fill src={cImage.src} sizes={'33.3vw'} alt={'Center cover image'}/>
        </motion.div>
        <motion.div {...animation(1.5)} className={styles.element}>
            <Image fill src={dImage.src} sizes={'33.3vw'} alt={'Right cover image'}/>
        </motion.div>
        <Particle
            className={styles.spotlight}
            animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1}, transition: { delay: 2, duration: 1 } }}
            image={{ src: spotlightImage.src, sizes: '20vw' }}
            isInView={isInView}
        />
    </motion.div>)
}