'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { ContactUsModal as UnfilledContactUsModal, useContactUsModalAnimation } from '@/widgets/contact-us'
import useTimer from '@/utils/hooks/useTimer'
import { useRouter } from '@/utils/lib/navigation'
import config from '@/utils/config'

interface Params {
    className?: string,
    delay?: number
}

export default function ContactUsModal({ className, delay = 5000 }: Params) {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [ref, animate] = useContactUsModalAnimation()
    const animateRef = useRef(animate)
    const { push } = useRouter()

    useTimer(() => setIsVisible(true), delay)

    useEffect(() => { isVisible && animateRef.current() }, [animateRef, isVisible])

    const onClick = () => push(config.routes.header.contactUs)
    const onClose = () => setIsVisible(false)

    return (<div ref={ref}>
        {isVisible && <UnfilledContactUsModal
            onClick={onClick}
            onClose={onClose}
            className={className}
        />}
    </div>)
}

export const MemoContactUsModal = memo(ContactUsModal)