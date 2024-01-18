import { Link } from '@/utils/lib/navigation'
import { LocaleSelect } from '@/widgets/header'
import { Children } from '@/utils/interfaces/Children'
import { forwardRef, ReactNode } from 'react'
import { ObjectType } from '@/utils/types/ObjectType'
import { Translation } from '../../interfaces/Translation'
import animations from '@/utils/assets/styles/animation.module.scss'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'

interface Params {
    styles: ObjectType<string, string>,
    className?: string,
    translation: Translation,
}

const routes = config.routes.header

function StyledLi({ children }: Children<ReactNode>) {
    return (<li className={animations.underline}>{children}</li>)
}

const Navigation = forwardRef<HTMLDivElement, Params>((
    { styles, translation: t, className }: Params,
    ref
) => {
    return (<nav ref={ref} className={cl(styles.header__nav, className)}>
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
})

Navigation.displayName = 'Navigation'

export default Navigation
export type { Params as NavigationParams }