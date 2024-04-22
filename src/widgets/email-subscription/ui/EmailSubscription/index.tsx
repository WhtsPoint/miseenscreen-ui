import type { EmailSubscriptionData } from '../../interfaces/EmailSubscriptionData'
import { dateToStringWithTime } from '@/utils/lib/dateToString'
import styles from './styles.module.scss'
import XIcon from '@/utils/ui/xIcon'

interface Params {
    emailSubscription: Pick<EmailSubscriptionData, 'email' | 'postedAt'>,
    onDeleteButtonClick: () => unknown
}

export default function EmailSubscription({ emailSubscription: { email, postedAt }, onDeleteButtonClick }: Params) {
    const date = postedAt && dateToStringWithTime(new Date(postedAt));

    console.log(date)

    return (<div className={styles.emailSubscription}>
        <button className={styles.emailSubscription__delete} onClick={onDeleteButtonClick}>
            <XIcon width={30} height={30} color={'white'} />
        </button>
        <span className={styles.emailSubscription__email}>{email} {date && `(Posted at: ${date})`}</span>
    </div>)
}