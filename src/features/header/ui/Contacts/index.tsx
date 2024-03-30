'use client'

import { useHeaderSettings } from '@/widgets/header'
import { options, variants } from '../../utils/header-animation'
import config from '@/utils/config'
import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import useHideOnScrollAnimation from '@/utils/hooks/useHideOnScrollAnimation'
import styles from './styles.module.scss'

const contacts = config.contacts
const containerHeight = 30

export default function Contacts() {
    const { theme } = useHeaderSettings()

    const [ref, animate] = useHideOnScrollAnimation(
        { height: containerHeight },
        { height: 0 },
        { duration: 0.1, ease: 'linear' }
    )

    useEffect(() => {
        animate(ref.current, variants[theme], options)
    }, [animate, ref, theme])

    return (<motion.address ref={ref} className={styles.contacts} style={{ height: containerHeight }}>
        <a href={'mailto:' + contacts.email} className={styles.contact}>Email</a>
        <a href={'tel:' + contacts.phone.current} className={styles.contact}>{contacts.phone.display}</a>
    </motion.address>)
}