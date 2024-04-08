import { GlobalSearch } from '@/features/search'
import ServiceNavigation from '../ServiceNavigation'
import { LocaleSelect } from '@/widgets/header'
import { forwardRef } from 'react'
import { useTranslations } from 'next-intl'
import Item from '../Item'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import config from '@/utils/config'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    listClassName?: string
}

const routes = config.routes.header

const Navigation = forwardRef<HTMLDivElement, Params>(({ className, listClassName }, ref) => {
    const t = useTranslations('header')

    return (<div data-tag={'header-navigation'} className={cl(styles.navigation, className)} ref={ref}>
        <GlobalSearch />
        <nav className={styles.nav}>
            <ul className={cl(styles.list, listClassName)}>
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
        </nav>
    </div>)
})

Navigation.displayName = 'Navigation'

export default motion(Navigation)