import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import { Background as NotFilledBackground } from '@/widgets/cases-points'
import { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import importImages from '@/utils/assets/images/cases-points'

interface Params {
    className?: string,
    isInViewMotion: boolean,
    position: number
}

const photosOnPosition = 3
const positionsCount = 3

export default function Background({ className, isInViewMotion, position }: Params) {
    const [photos, setPhotos] = useState<StaticImageData[]>([])

    useEffect(() => {
        (async () => setPhotos(await importImages()))()
        return () => setPhotos([])
    }, [])

    return (<div className={cl(styles.background, className)}>
        <motion.div
            transition={{ duration: 0.8 }}
            animate={{ y: isInViewMotion ? 0 : '100%' }}
            className={styles.background__container}
        >
            <NotFilledBackground
                position={position}
                downPhotos={photos.slice(0, photosOnPosition * positionsCount)}
                upPhotos={photos.slice(photosOnPosition * positionsCount)}
                photoOnPosition={photosOnPosition}
            />
        </motion.div>
    </div>)
}