import { EmailSubscriptionData } from '../../interfaces/EmailSubscriptionData'
import styles from './styles.module.scss'
import XIcon from '@/utils/ui/xIcon'

interface Params {
    emailSubscription: Pick<EmailSubscriptionData, 'email'>,
    onDeleteButtonClick: () => unknown
}

export default function EmailSubscription({ emailSubscription: { email }, onDeleteButtonClick }: Params) {
    return (<div className={styles.emailSubscription}>
        <button className={styles.emailSubscription__delete} onClick={onDeleteButtonClick}>
            <XIcon width={30} height={30} color={'white'} />
        </button>
        <span className={styles.emailSubscription__email}>{email}</span>
    </div>)
}