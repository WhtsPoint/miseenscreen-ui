'use client'

import { Comment } from '@/widgets/services'
import { useTranslations } from 'next-intl'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

export default function ECommerce() {
    const t = useTranslations('services.ecommerce')
    const [ref, animate] = useAnimate()
    const [isCommentAnimate, setIsCommentAnimate] = useState<boolean>(true)

    // useEffect(() => {(async () => {
    //     await animate([
    //         [ref.current, { opacity: [0, 1] }, { duration: 0 }],
    //         ['div[data-tag=hl]', { width: ['0%', '100%'] }],
    //         ['h2, li', { opacity: [0, 1], y: [-100, 0] }, { delay: stagger(0.2), ease: 'linear', at: '+0' }],
    //         ['p[data-tag=description], div[data-tag=comment]', { opacity: [0, 1] }, { at: '+0', ease: 'linear', delay: stagger(0.2) }]
    //     ])
    //     setIsCommentAnimate(true)
    // })()}, [])

    return (<section ref={ref} className={styles.eCommerce}>
        <h2 className={sectionStyles.title}>{t('title')}</h2>
        <ul className={sectionStyles.props}>
            {Object.values(t.raw('props')).map((item, index) => {
                return <li key={index} className={sectionStyles.props__item}>{item as string}</li>
            })}
        </ul>
        <div data-tag={'hl'} className={sectionStyles.line} />
        <p data-tag={'description'} className={sectionStyles.paragraph}>{t('description.0')}</p>
        <Comment isAnimate={isCommentAnimate} text={t('description.1')} />
    </section>)
}