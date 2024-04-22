import Navigation from '../Navigation'
import { useAnimate } from 'framer-motion'

type NavigationParams = Parameters<typeof Navigation>[0]

export default function AnimatedNavigation(params: NavigationParams) {
    const [ref] = useAnimate()

    return <Navigation ref={ref} {...params} />
}