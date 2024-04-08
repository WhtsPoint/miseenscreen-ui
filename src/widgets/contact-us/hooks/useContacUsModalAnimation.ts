import { useAnimate } from 'framer-motion'

export default function useContactUsModalAnimation() {
    const [ref, animate] = useAnimate()

    return [ref, () => {
        return animate([
            ['*[data-tag="contact-us-modal"]', { opacity: [0, 1] }, { duration: 0.5 }],
            ['*[data-tag="light"]', { opacity: [0, 1] }, { duration: 2 }]
        ])
    }] as const
}