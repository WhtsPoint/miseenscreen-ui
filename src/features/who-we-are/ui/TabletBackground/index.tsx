import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import tabletImage from '@/utils/assets/images/who-we-are/tablet.png'
import lightImage from '@/utils/assets/images/who-we-are/light-3.png'

interface Params {
    className?: string
}

export default function TabletBackground({ className }: Params) {
    const ref = useBackgroundAnimation()

    return (<div ref={ref} className={cl(styles.tabletBackground, className)}>
        <Image fill sizes={'100vw'} data-tag={'background'} className={styles.background} src={tabletImage.src} alt={''} />
        <div data-tag={'light'} className={styles.light}>
            <Image fill sizes={'500px'} className={styles.lightImage} src={lightImage.src} alt={''} />
        </div>
    </div>)
}