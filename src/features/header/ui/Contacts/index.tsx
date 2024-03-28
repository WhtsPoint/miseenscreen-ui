'use client'

import { useHeaderSettings } from '@/widgets/header'
import { options, variants } from '../../utils/header-animation'
import config from '@/utils/config'
import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import useHideOnScrollAnimation from '@/utils/hooks/useHideOnScrollAnimation'

const contacts = config.contacts
const containerHeight = 30

export default function Contacts() {
    const { theme } = useHeaderSettings()
    const [ref, animate] = useAnimate()

    useHideOnScrollAnimation(ref.current, animate, { height: containerHeight }, { height: 0 })

    useEffect(() => {
        animate(ref.current, variants[theme], options)
    }, [animate, ref, theme])

    return (<motion.address ref={ref} className={styles.contacts} style={{ height: containerHeight }}>
        <a href={'mailto:' + contacts.email} className={styles.contact}>Email</a>
        <a href={'tel:' + contacts.phone.current} className={styles.contact}>{contacts.phone.display}</a>
    </motion.address>)
}