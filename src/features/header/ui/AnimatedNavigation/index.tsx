import Navigation, { NavigationParams } from '../Navigation'
import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

export default function AnimatedNavigation(params: NavigationParams) {
    const [ref, animate] = useAnimate()

    return <Navigation ref={ref} {...params} />
}