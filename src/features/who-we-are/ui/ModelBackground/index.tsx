import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import Image from 'next/image'
import modelImage from '@/utils/assets/images/who-we-are/model.png'
import lightImage from '@/utils/assets/images/who-we-are/light-2.png'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function ModelBackground({ className }: Params) {
    const ref = useBackgroundAnimation()

    return (<div ref={ref} className={cl(styles.modelBackground, className)}>
        <div data-tag={'background'} className={styles.model}>
            <Image fill sizes={'100vw'} className={styles.modalImage} src={modelImage.src} alt={'Model'} />
        </div>
        <div data-tag={'light'} className={styles.light}>
            <Image fill sizes={'800px'} className={styles.lightImage} src={lightImage.src} alt={''} />
        </div>
    </div>)
}