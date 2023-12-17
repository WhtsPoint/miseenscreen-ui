import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'
import styles from './styles.module.scss'

const videoLink = 'https://drive.google.com/uc?export=download&id=1cDZYDydBMIVnTJD5mW1Emj3G4Fo02b6R'

interface Params {
    style?: MotionStyle
}

export default function Analytics({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videoLink }}
        theme={t('analytics')}
        themeClass={styles.themeText}
    />)
}