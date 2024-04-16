import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import { SourceHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import lightImage from '@/utils/assets/images/stack/particles/straight-line-light.png'

interface Params extends Pick<SourceHTMLAttributes<HTMLSourceElement>, 'src' | 'type' > {
    className?: string,
    photoClassName?: string
}

export default function SidePhoto({ className, photoClassName, ...other }: Params) {
    return (<div data-tag={'background'} className={cl(className, styles.sidePhoto)}>
        <div className={cl(styles.videoContainer, photoClassName)}>
            <video className={styles.video} autoPlay muted loop>
                <source {...other} />
            </video>
        </div>
        <div className={styles.light}>
            <Image sizes={'32px'} className={styles.image} fill src={lightImage.src} alt={''} />
        </div>
    </div>)
}