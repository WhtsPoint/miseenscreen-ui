import ServiceNavigation from '../ServiceNavigation'
import { LocaleSelect } from '@/widgets/header'
import { forwardRef } from 'react'
import { useTranslations } from 'next-intl'
import Item from '../Item'
import { motion } from 'framer-motion'
import config from '@/utils/config'
import styles from './styles.module.scss'

const routes = config.routes.header

const Navigation = forwardRef<HTMLDivElement>((_, ref) => {
    const t = useTranslations('header')

    return (<nav data-tag={'header-navigation'} ref={ref} className={styles.nav}>
        <ul className={styles.list}>
            <ServiceNavigation>
                <Item href={routes.services} section={'services'}>{t('services')}</Item>
            </ServiceNavigation>
            <Item href={routes.cases} section={'cases'}>{t('cases')}</Item>
            <Item href={routes.cooperation} section={'cooperation'}>{t('cooperation')}</Item>
            <Item href={routes.ourStory} section={'our-story'}>{t('our-story')}</Item>
            <Item href={routes.blog} section={'blog'}>{t('blog')}</Item>
            <Item href={routes.contactUs} section={'contact-us'}>{t('contact-us')}</Item>
            <LocaleSelect
                className={styles.header__localeSelect}
                optionClass={styles.header__localeSelect__optionList}
            />
        </ul>
    </nav>)
})

Navigation.displayName = 'Navigation'

export default motion(Navigation)