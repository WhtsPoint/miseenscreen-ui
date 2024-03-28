'use client'

import { HomeLogo, useHeaderSettings } from '@/widgets/header'
import { Translation } from '../../interfaces/Translation'
import Navigation from '../Navigation'
import List from '../List'
import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import useWidthRef from '@/utils/hooks/useWidthRef'
import styles from './styles.module.scss'

interface Params {
    translation : Translation
}

const variants = {
    solid: { background: 'rgba(0, 0, 0, 1)' },
    transparent: { background: 'rgba(0, 0, 0, 0)' }
} as const

export default function Header({ translation }: Params) {
    const { theme } = useHeaderSettings()
    const widthRef = useWidthRef()
    const [ref, animate] = useAnimate()

    const navigationAttributes = { styles, translation }

    useEffect(() => {
        const options = [variants[theme], { duration: 0.5 }] as const
        const width = widthRef.current

        animate(ref.current, ...options)
        animate('div[data-tag="select-optionList"]', ...options)

        if (width && width < 1000) animate('nav[data-tag="header-navigation"]', ...options)
    }, [widthRef, ref, theme, animate])

    return (<header ref={ref} className={styles.header}>
        <HomeLogo className={styles.header__logo} />
        <List className={styles.header__list}>
            <Navigation {...navigationAttributes} />
        </List>
    </header>)
}