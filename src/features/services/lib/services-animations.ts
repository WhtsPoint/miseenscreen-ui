import { stagger } from 'framer-motion'
import type {MutableRefObject} from 'react'

const transitions = {
    default: { delay: stagger(0.2), ease: 'linear', at: '+0' }
} as const

const animations = {
    init: (ref: MutableRefObject<null>) => [ref.current, { opacity: [0, 1] }, { duration: 0 }],
    hl : ['div[data-tag=hl]', { width: ['0%', '100%'] }],
    head: ['h2, ul[data-tag=props] li', { opacity: [0, 1], y: [-100, 0] }, transitions.default],
    stack: ['ul[data-tag=stack] li', { opacity: [0, 1], x: [-100, 0] }, transitions.default],
    comment: ['div[data-tag=comment]', { opacity: [0, 1] }, transitions.default]
} as const

export { transitions, animations }