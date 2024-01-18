import Navigation, { NavigationParams } from '../Navigation'
import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

export default function AnimatedNavigation(params: NavigationParams) {
    const [ref, animate] = useAnimate()

    useEffect(() => {
        animate([
            ['li', { opacity: [0, 1] }, { delay: stagger(0.1) }],
            ['div', { opacity: [0, 1] }, { at: '-0.2' }]
        ])
    }, [ref, animate])

    return <Navigation ref={ref} {...params} />
}