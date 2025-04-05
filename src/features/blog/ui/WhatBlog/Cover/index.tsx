'use client'

import Image, { type StaticImageData } from 'next/image'
import Particle from '@/utils/ui/Particle'
import { cl } from '@/utils/lib/cl'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import aImage from '@/utils/assets/images/blog/what/cover/a.png'
import bImage from '@/utils/assets/images/blog/what/cover/b.png'
import cImage from '@/utils/assets/images/blog/what/cover/c.png'
import dImage from '@/utils/assets/images/blog/what/cover/d.png'
import straightLineImage from '@/utils/assets/images/stack/particles/straight-line-light.png'
import glareLightImage from '@/utils/assets/images/stack/particles/glare2.png'

interface Params {
    previewCover: StaticImageData
}

const animationWithView = (isInView: boolean) => (delay: number) => ({
    initial: { opacity: 0 },
    variants: { view: { opacity: 1 } },
    transition: { delay, duration: 1 },
    animate: isInView && 'view'
})

export default function Cover({}: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const animation = animationWithView(isInView)

    return (<div ref={ref} className={styles.cover}>
        <motion.div
            {...animation(0)}
            style={{ gridArea: 'a' }} className={styles.element}
        >
            <Image fill src={aImage.src} alt={'Left cover picture'} />
            <Particle
                className={styles.straightLine}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { delay: 1, duration: 1 }
                }}
                image={{ src: straightLineImage, sizes: '50px' }}
                isInView={isInView}
            />
        </motion.div>
        <motion.div
            {...animation(0.25)}
            style={{ gridArea: 'b' }}
            className={styles.element}
        >
            <Image fill src={bImage.src} alt={'Left cover picture'} />
        </motion.div>
        <motion.div
            {...animation(0.5)}
            style={{ gridArea: 'c' }}
            className={styles.element}
        >
            <Image fill src={cImage.src} alt={'Left cover picture'} />
        </motion.div>
        <motion.div
            {...animation(0.75)}
            style={{ gridArea: 'd' }}
            className={cl(styles.element, styles.contain)}
        >
            <Image fill src={dImage.src} alt={'Left cover picture'} />
            <Particle
                className={styles.glare}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { delay: 2, duration: 1 }
                }}
                image={{ src: glareLightImage.src, sizes: '12.5vw' }}
                isInView={isInView}
            />
        </motion.div>
    </div>)
}