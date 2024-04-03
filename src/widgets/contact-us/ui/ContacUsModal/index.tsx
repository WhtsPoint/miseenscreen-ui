import { cl } from '@/utils/lib/cl'
import Image from 'next/image'
import daryaImage from '@/utils/assets/images/about-us/darya.png'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'

interface Params {
    className?: string,
    onClick?: () => unknown,
    onClose?: () => unknown
}

const avatarSize = 150

export default function ContactUsModal({ className, onClick, onClose }: Params) {
    const t = useTranslations('contact-us-modal')

    return (<div data-tag={'contact-us-modal'} className={cl(styles.modal, className)}>
        <div style={{ width: avatarSize / 2 }}>
            <div className={styles.avatar}>
                <Image
                    width={avatarSize}
                    height={avatarSize}
                    src={daryaImage.src}
                    alt={'Project manager photo'}
                />
            </div>
        </div>
        <div className={styles.container}>
            <p style={{ paddingLeft: avatarSize / 2 + 20 }}>{t('description')}</p>
            <button className={styles.button} onClick={onClick}>{t('button-text')}</button>
            <button className={styles.button} onClick={onClose}>{t('close')}</button>
        </div>
    </div>)
}