import useBackgroundAnimation from '../../hooks/useBackgroundAnimation'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import codeImage from '@/utils/assets/images/who-we-are/code.png'
import lightImage from '@/utils/assets/images/who-we-are/light-1.png'

interface Params {
    className?: string
}

export default function CodeBackground({ className }: Params) {
    const ref = useBackgroundAnimation()

    return (<div ref={ref} className={cl(styles.codeBackground, className)}>
        <div data-tag={'light'} className={styles.light}>
            <Image
                fill sizes={'(max-width: 1000px) 100vw, 2000px'}
                className={styles.lightImage}
                src={lightImage.src}
                alt={''}
            />
        </div>
        <Image
            fill
            sizes={'100vw'}
            loading={'lazy'}
            data-tag={'background'}
            className={styles.image}
            src={codeImage.src}
            alt={''}
        />
    </div>)
}