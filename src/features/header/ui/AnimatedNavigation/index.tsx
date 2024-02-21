import Navigation, { NavigationParams } from '../Navigation'
import { useAnimate } from 'framer-motion'

export default function AnimatedNavigation(params: NavigationParams) {
    const [ref] = useAnimate()

    return <Navigation ref={ref} {...params} />
}