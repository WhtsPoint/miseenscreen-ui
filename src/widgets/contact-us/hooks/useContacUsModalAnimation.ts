import { useAnimate } from 'framer-motion'

export default function useContactUsModalAnimation() {
    const [ref, animate] = useAnimate()

    return [ref, () => {
        return animate('div[data-tag="contact-us-modal"]', { opacity: [0, 1] }, { duration: 0.5 })
    }] as const
}