import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import type { Status } from '../../types/Status'
import type { ReactNode } from 'react'
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

    return (<button aria-label={'send email on subscription'} type={'submit'} className={cl(
        isSuccess && styles.subscribeButton_success,
        status === 'failure' && styles.subscribeButton_failure,
        className
    )}>
        {images[status]}
    </button> )
}