import styles from './styles.module.scss'
import xIcon from '@/utils/assets/images/whiteX.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Params {
    file: Pick<File, 'name' | 'size'>,
    onDelete?: () => unknown
}
3
export default function FileContainer({ file, onDelete }: Params) {
    const { name, size } = file
    const kb = size / 1000

    return (
        <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            exit={{ x: [0, -100], opacity: [1, 0] }}
            className={styles.container}
        >
            <span>{name}</span>
            <small className={styles.container__error}></small>
            <span>{(kb < 1 ? '< 1' : kb.toFixed(2)) + 'KB'}</span>
            <div className={styles.container__delete}>
                <button onClick={onDelete} type={'button'} className={styles.container__delete__button}>
                    <Image src={xIcon} alt={''} />
                </button>
            </div>
        </motion.div>
    )
}