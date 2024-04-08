'use client'

import { HomeLogo, useHeaderSettings } from '@/widgets/header'
import Navigation from '../Navigation'
import List from '../List'
import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import useWidthRef from '@/utils/hooks/useWidthRef'
import { options, variants } from '../../utils/header-animation'
import styles from './styles.module.scss'

export default function Header() {
    const { theme } = useHeaderSettings()
    const widthRef = useWidthRef()
    const [ref, animate] = useAnimate()

    useEffect(() => {
        const animation = [variants[theme], options] as const
        const width = widthRef.current

        animate(ref.current, ...animation)
        animate('div[data-tag="select-optionList"]', ...animation)

        if (width && width < 1000) animate('div[data-tag="header-navigation"]', ...animation)
    }, [widthRef, ref, theme, animate])

    return (<header ref={ref} className={styles.header}>
        <HomeLogo className={styles.header__logo} />
        <List><Navigation /></List>
    </header>)
}