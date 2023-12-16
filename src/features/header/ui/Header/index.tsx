'use client'

import solidStyles from './styles.module.scss'
import transparentStyles from './styles.transparent.module.scss'
import config from '@/utils/config'
import { Link } from '@/utils/lib/navigation'
import { HomeLogo, LocaleSelect, useHeaderSettings } from '@/widgets/header'
import animations from '@/utils/assets/styles/animation.module.scss'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'

const routes = config.routes.header

interface Params {
    translation : {
        services: string,
        cases: string,
        cooperation: string,
        ourStory: string,
        blog: string,
        contactUs: string
    }
}

function StyledLi({ children }: Children<ReactNode>) {
    return (<li className={animations.underline}>{children}</li>)
}

export default function Header({ translation: t }: Params) {
    const { theme } = useHeaderSettings()

    const styles = theme === 'solid' ? solidStyles : transparentStyles

    return (<header className={styles.header}>
        <HomeLogo />
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav__ul}>
                <StyledLi>{t.services}</StyledLi>
                <StyledLi><Link href={'/'}>{t.cases}</Link></StyledLi>
                <StyledLi><Link href={routes.cooperation}>{t.cooperation}</Link></StyledLi>
                <StyledLi><Link href={routes.ourStory}>{t.ourStory}</Link></StyledLi>
                <StyledLi><Link href={routes.blog}>{t.blog}</Link></StyledLi>
                <StyledLi><Link href={routes.contactUs}>{t.contactUs}</Link></StyledLi>
                <LocaleSelect
                    className={styles.header__localeSelect}
                    optionClass={styles.header__localeSelect__optionList}
                />
            </ul>
        </nav>
    </header>)
}