import { LocaleSelect } from '@/widgets/header'
import { forwardRef, ReactNode } from 'react'
import { Link } from '@/utils/lib/navigation'
import { Children } from '@/utils/interfaces/Children'
import { ObjectType } from '@/utils/types/ObjectType'
import { Translation } from '../../interfaces/Translation'
import { cl } from '@/utils/lib/cl'
import { useSpecialSection } from '@/features/main'
import { motion } from 'framer-motion'
import config from '@/utils/config'
import animations from '@/utils/assets/styles/animation.module.scss'

interface Params {
    styles: ObjectType<string, string>,
    className?: string,
    translation: Translation
}

const routes = config.routes.header

function StyledLi({ children }: Children<ReactNode>) {
    return (<li className={animations.underline}>{children}</li>)
}

const Navigation = forwardRef<HTMLDivElement, Params>((
    { styles, translation: t, className }: Params,
    ref
) => {
    const { invoke } = useSpecialSection()

    return (<nav data-tag={'header-navigation'} ref={ref} className={cl(styles.header__nav, className)}>
        <ul className={styles.header__nav__ul}>
            <StyledLi>
                <Link href={routes.services} onClick={() => invoke('services')} scroll={false}>
                    {t.services}
                </Link>
            </StyledLi>
            <StyledLi>
                <Link href={routes.cases} onClick={() => invoke('cases')} scroll={false}>
                    {t.cases}
                </Link>
            </StyledLi>
            <StyledLi>
                <Link href={routes.cooperation} onClick={() => invoke('cooperation')} scroll={false}>
                    {t.cooperation}
                </Link>
            </StyledLi>
            <StyledLi>
                <Link href={routes.ourStory} onClick={() => invoke('our-story')} scroll={false}>
                    {t.ourStory}
                </Link>
            </StyledLi>
            <StyledLi>
                <Link href={routes.blog} onClick={() => invoke('blog')} scroll={false}>
                    {t.blog}
                </Link>
            </StyledLi>
            <StyledLi><Link href={routes.contactUs}>{t.contactUs}</Link></StyledLi>
            <LocaleSelect
                className={styles.header__localeSelect}
                optionClass={styles.header__localeSelect__optionList}
            />
        </ul>
    </nav>)
})

Navigation.displayName = 'Navigation'

export default motion(Navigation)
export type { Params as NavigationParams }