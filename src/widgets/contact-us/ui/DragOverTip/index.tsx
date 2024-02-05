import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface Params {
    isDragOver: MotionValue<boolean>
}

export default function DragOverTip({ isDragOver } : Params) {
    const t = useTranslations('contact-us.form.files')
    const opacity = useTransform(isDragOver, (value): number => value ? 1 : 0)

    return (<motion.aside className={cl(styles.tip)} style={{ opacity }}>
        <span className={styles.tip__plus}>+</span>
        <span>{t('drag-tip')}</span>
    </motion.aside>)
}