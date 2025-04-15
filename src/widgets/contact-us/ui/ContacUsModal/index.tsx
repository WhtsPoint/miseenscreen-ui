import XIcon from '@/utils/ui/xIcon'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import type { MouseEvent } from 'react'
import styles from './styles.module.scss'
import backgroundImage from '@/utils/assets/images/contact-us-modal/background.png'
import lightImage from '@/utils/assets/images/contact-us-modal/light.png'

interface Params {
    className?: string,
    onClick?: () => unknown,
    onClose?: () => unknown,
    sizes?: string
}

export default function ContactUsModal({ className, onClick, onClose, ...rest }: Params) {
    const { sizes = '(max-width: 700px) 100vw, 700px' } = rest
    const t = useTranslations('contact-us-modal')

    const onCloseWrapper = (event: MouseEvent) => {
        event.stopPropagation()
        onClose?.()
    }

    return (<div
        data-tag={'contact-us-modal'}
        tabIndex={0}
        className={cl(styles.modal, className)}
        onClick={onClick}
    >
        <Image className={styles.background} fill sizes={sizes} src={backgroundImage.src} alt={''} />
        <div data-tag={'light'} className={styles.light}>
            <Image fill src={lightImage.src} alt={''} sizes={'500px'} />
        </div>
        <button className={styles.close} onClick={onCloseWrapper}>
            <XIcon width={30} height={30} color={'white'} />
        </button>
        <div className={styles.text}>
            <p>{t('description')}</p>
            <b className={styles.title}>{t('title')}</b>
        </div>
    </div>)
}