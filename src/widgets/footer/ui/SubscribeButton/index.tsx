import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import { Status } from '../../types/Status'
import checkIcon from '@/utils/assets/images/check.svg'
import xIcon from '@/utils/assets/images/x.svg'

interface Params {
    name: string,
    className?: string,
    status: Status
}

export default function SubscribeButton({ name, className, status }: Params) {
    const isNotWaiting = status !== 'waiting'
    const isSuccess = status === 'success'

    return (<button type={'submit'} className={cl(
        isSuccess && styles.subscribeButton_success,
        status === 'failure' && styles.subscribeButton_failure,
        className
    )}>
        {isNotWaiting ? <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.subscribeButton__check}
            alt={''}
            src={isSuccess ? checkIcon.src : xIcon.src}
        /> : name}
    </button> )
}