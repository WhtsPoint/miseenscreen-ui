import { cl } from '@/utils/lib/cl'
import { Background } from '@/widgets/cases-points'
import type { Children } from '@/utils/interfaces/Children'
import type { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.scss'
import type { Media } from '@/widgets/cases-points/types/Media'

interface Params extends Children<ReactNode> {
    style?: CSSProperties,
    className?: string,
    leftLineClassName?: string,
    rightLineClassName?: string,
    defaultSpeedMultiplier?: number,
    media: Media[],
    reverse?: boolean
}

export default function Stack(
    { children, style, className, leftLineClassName, rightLineClassName, media, defaultSpeedMultiplier = 1, reverse = false }: Params
) {
    return (<section style={style} className={cl(styles.stack, reverse && styles.stack_reverse, className)}>
        <div className={styles.main}>
            {children}
        </div>
        <div className={styles.backgroundBlock}>
            <Background
                className={styles.background}
                position={0}
                photoOnPosition={media.length / 2}
                upMedia={media.slice(0, media.length / 2)}
                downMedia={media.slice(media.length / 2)}
                scrollSpeedMultiplier={1}
                defaultSpeed={0.05 * defaultSpeedMultiplier}
                leftClassName={styles.leftLine}
                rightClassName={styles.rightLine}
                leftLineClassName={leftLineClassName}
                rightLineClassName={rightLineClassName}
            />
        </div>
    </section>)
}