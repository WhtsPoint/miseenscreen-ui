import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react'
import { MotionValue, useMotionValueEvent, useTransform } from 'framer-motion'

//const videoLink = 'https://drive.google.com/uc?export=download&id=1HDTUbX-cWOkhHxSUn8U4akHtFaFNqG4A'
const videoLink = 'https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4'

interface Params {
    scrollY: MotionValue<number>
}

export default function LightScene({ scrollY }: Params) {
    const ref = useRef<HTMLVideoElement>(null)

    const frameProgress = useTransform(scrollY, [0.5, 1], [1, 0])
    //
    // useMotionValueEvent(scrollY, 'change', (progress) => {
    //     const video = ref.current
    //
    //     if (video) {
    //         video.currentTime += 0.1
    //         console.log(video.currentTime)
    //     }
    // })

    // useEffect(() => {
    //     const updateFrame = () => {
    //         const video = ref.current
    //
    //         if (video) {
    //             // alert(scrollY.get())
    //             video.currentTime = scrollY.get() * (video.duration || 0)
    //             console.log(video.currentTime)
    //         }
    //
    //         window.requestAnimationFrame(updateFrame)
    //     }
    //
    //     window.requestAnimationFrame(updateFrame)
    // }, [frameProgress])

    return (<div className={styles.lightScene}>
        {/*<video*/}
        {/*    ref={ref}*/}
        {/*    className={styles.lightScene__video}*/}
        {/*    autoPlay={false}*/}
        {/*    muted={true}*/}
        {/*    controls={false}*/}
        {/*>*/}
        {/*    <source src={videoLink} type={'video/mp4'} />*/}
        {/*</video>*/}
    </div>)
}