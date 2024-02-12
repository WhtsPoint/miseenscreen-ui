import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import { Status } from '../../types/Status'
import checkIcon from '@/utils/assets/images/check.svg'
import xIcon from '@/utils/assets/images/x.svg'
import { ReactNode } from 'react'
import LetterIcon from '@/utils/ui/LetterIcon'
import CheckIcon from '@/utils/ui/CheckIcon'
import XIcon from '@/utils/ui/xIcon'

interface Params {
    className?: string,
    status: Status
}

const params = { width: 20, height: 20 }

const images: Record<Status, ReactNode> = {
    waiting: <LetterIcon {...params} />,
    success: <CheckIcon {...params} />,
    failure: <XIcon color={'red'} {...params} />
} as const

export default function SubscribeButton({ className, status }: Params) {
    const isSuccess = status === 'success'

    return (<button type={'submit'} className={cl(
        isSuccess && styles.subscribeButton_success,
        status === 'failure' && styles.subscribeButton_failure,
        className
    )}>
        {images[status]}
    </button> )
}