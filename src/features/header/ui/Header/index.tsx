'use client'

import { HomeLogo, useHeaderSettings } from '@/widgets/header'
import { Translation } from '../../interfaces/Translation'
import Navigation from '../Navigation'
import solidStyles from './styles.module.scss'
import transparentStyles from './styles.transparent.module.scss'
import List from '../List'

interface Params {
    translation : Translation
}

export default function Header({ translation }: Params) {
    const { theme } = useHeaderSettings()

    const styles = theme === 'solid' ? solidStyles : transparentStyles
    const navigationAttributes = { styles, translation }

    return (<header className={styles.header}>
        <HomeLogo className={styles.header__logo} />
        <List className={styles.header__list}>
            <Navigation {...navigationAttributes} />
        </List>
    </header>)
}