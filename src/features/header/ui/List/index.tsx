import menuIcon from '@/utils/assets/images/menu.svg'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { cl } from '@/utils/lib/cl'
import { stagger, useAnimate, useMotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

interface Params extends Children<ReactNode> {
    className?: string
}

export default function List({ children, className }: Params) {
    const [ref, animate] = useAnimate()
    const isHidden = useMotionValue<boolean>(true)
    const display = useTransform(isHidden, (value) => value ? 'none' : 'block')

    const onClick = () => {
        isHidden.set(!isHidden.get())
        !isHidden.get() && animate([
            ['nav li', { opacity: [0, 1] }, { delay: stagger(0.1) }],
            ['nav div[data-tag="locale-select"]', { opacity: [0, 1] }, { at: '-0.2' }]
        ])
    }

    return (<div ref={ref} className={cl(styles.list, className)}>
        <button onClick={onClick} className={styles.list__button}>
            <Image alt={''} src={menuIcon} />
        </button>
        <motion.div style={{ display }} className={styles.list__list}>{children}</motion.div>
    </div>)
}