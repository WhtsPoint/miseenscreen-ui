import { Link } from '@/utils/lib/navigation'
import { LocaleSelect } from '@/widgets/header'
import { ObjectType } from '@/utils/types/ObjectType'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import animations from '@/utils/assets/styles/animation.module.scss'
import { Translation } from '@/features/header/interfaces/Translation'
import config from '@/utils/config'
import { cl } from '@/utils/lib/cl'

interface Params {
    styles: ObjectType<string, string>,
    className?: string,
    translation: Translation,
}

const routes = config.routes.header

function StyledLi({ children }: Children<ReactNode>) {
    return (<li className={animations.underline}>{children}</li>)
}

export default function Navigation({ styles, translation: t, className }: Params) {
    return (<nav className={cl(styles.header__nav, className)}>
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
    </nav>)
}