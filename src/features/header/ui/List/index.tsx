import menuIcon from '@/utils/assets/images/menu.svg'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { stagger, useAnimate } from 'framer-motion'
import { ReactNode, useState } from 'react'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import { motion } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {
    className?: string
}

export default function List({ children, className }: Params) {
    const [ref, animate] = useAnimate()
    const listRef = useSelectClosing<HTMLDivElement>({ onClose: () => setIsHidden(true) })
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const onClick = () => {
        const swapped = !isHidden

        setIsHidden(swapped)

        !swapped && animate([
            ['li, input[data-tag="global-search"]', { opacity: [0, 1] }, { delay: stagger(0.1) }],
            ['div[data-tag="locale-select"]', { opacity: [0, 1] }, { at: '-0.2' }]
        ])
    }

    return (<div className={styles.wrapper} ref={listRef}>
        <div ref={ref} className={cl(styles.list, className)}>
            <button onClick={onClick} className={styles.list__button}>
                <Image alt={''} src={menuIcon} />
            </button>
            <motion.div
                className={cl(styles.list__list, isHidden && styles.list__list_hidden)}
            >
                {children}
            </motion.div>
        </div>
    </div>)
}