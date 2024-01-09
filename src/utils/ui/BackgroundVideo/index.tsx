import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import { ReactNode, useState } from 'react'

interface Params {
    className?: string,
    videoClass?: string,
    src: string,
    type?: string,
    loadingElement?: ReactNode
}

export default function BackgroundVideo(
    { className, src, videoClass, loadingElement, type = 'video/mp4' }: Params
) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    return (<div className={cl(styles.container, className)}>
        {!isLoaded && loadingElement}
        <video
            onLoadedData={() => setIsLoaded(true)}
            className={cl(
                styles.container__video,
                videoClass,
                !isLoaded && styles.container__video_hidden
            )}
            muted={true}
            autoPlay={true}
            loop={true}
        >
            <source src={src} type={type} />
        </video>
    </div>)
}