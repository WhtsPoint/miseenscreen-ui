import menuIcon from '@/utils/assets/images/menu.svg'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface Params extends Children<ReactNode> {}

export default function List({ children }: Params) {
    const isHidden = useMotionValue<boolean>(true)
    const display = useTransform(isHidden, (value) => value ? 'none' : 'block')

    return (<div className={styles.list}>
        <motion.button onClick={() => isHidden.set(!isHidden.get())} className={styles.list__button}>
            <Image alt={''} src={menuIcon} />
        </motion.button>
        <motion.div style={{ display }} className={styles.list__list}>{children}</motion.div>
    </div>)
}