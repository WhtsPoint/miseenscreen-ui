import { useTranslations } from 'next-intl'
import PhoneIcon from '@/utils/ui/PhoneIcon'
import LetterIcon from '@/utils/ui/LetterIcon'
import WhatsappIcon from '@/utils/ui/WhatsappIcon'
import TelegramIcon from '@/utils/ui/TelegramIcon'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string
}

export default function ContactInformation({ className }: Params) {
    const t = useTranslations('contact-us.contacts')

    return (<aside className={cl(styles.contactInformation, className)}>
        <b className={styles.contactInformation__title}>{t('title')}</b>
        <address>
            <ul className={styles.contactInformation__list}>
                <li className={styles.contactInformation__list__item}>
                    <PhoneIcon width={20} height={20} color={'white'} />
                    <a href={'tel:+13236838107'}>+1 323 683 8107</a>
                </li>
                <li className={styles.contactInformation__list__item}>
                    <LetterIcon width={20} height={20} />
                    <a href={'tel:+13236838107'}>+1 323 683 8107</a>
                </li>
                <li className={styles.contactInformation__list__item}>
                    <WhatsappIcon width={20} height={20} color={'white'} />
                    <a href={'https://wa.me/+13236838107'}>WhatsApp</a>
                </li>
                <li className={styles.contactInformation__list__item}>
                    <TelegramIcon width={20} height={20} color={'white'} />
                    <a href={'https://t.me/daripryimak'}>Telegram</a>
                </li>
            </ul>
        </address>
    </aside>)
}