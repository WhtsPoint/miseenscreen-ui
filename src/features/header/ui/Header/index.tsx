import styles from './styles.module.scss'
import config from '@/utils/config'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import { LocaleSelect } from '@/widgets/header'
import animations from '@/utils/assets/styles/animation.module.scss'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'

const routes = config.routes.header

function StyledLi({ children }: Children<ReactNode>) {
    return (<li className={animations.underline}>{children}</li>)
}

export default function Header() {
    const t = useTranslations('header')
    return (<header className={styles.header}>
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav__ul}>
                <StyledLi>{t('service')}</StyledLi>
                <StyledLi><Link href={'/'}>{t('cases')}</Link></StyledLi>
                <StyledLi><Link href={routes.cooperation}>{t('cooperation')}</Link></StyledLi>
                <StyledLi><Link href={routes.ourStory}>{t('our-story')}</Link></StyledLi>
                <StyledLi><Link href={routes.blog}>{t('blog')}</Link></StyledLi>
                <StyledLi><Link href={routes.contactUs}>{t('contact-us')}</Link></StyledLi>
                <LocaleSelect />
            </ul>
        </nav>
    </header>)
}