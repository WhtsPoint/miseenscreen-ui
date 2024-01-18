'use client'

import { HomeLogo, useHeaderSettings } from '@/widgets/header'
import { Translation } from '@/features/header/interfaces/Translation'
import AnimatedNavigation from '../AnimatedNavigation'
import Navigation from '../../ui/Navigation'
import useWidth from '@/utils/hooks/useWidth'
import List from '@/utils/ui/List'
import solidStyles from './styles.module.scss'
import transparentStyles from './styles.transparent.module.scss'
import mobileStyle from './styles.mobile.module.scss'

interface Params {
    translation : Translation
}

export default function Header({ translation }: Params) {
    const { theme } = useHeaderSettings()
    const width = useWidth()

    const styles = theme === 'solid' ? solidStyles : transparentStyles
    const navigationAttributes = { styles, translation }

    return (<header className={styles.header}>
        <HomeLogo className={styles.header__logo} />
        {width > 1000 ? <Navigation {...navigationAttributes} /> : <List>
            <AnimatedNavigation className={mobileStyle.header} {...navigationAttributes} />
        </List>}
    </header>)
}