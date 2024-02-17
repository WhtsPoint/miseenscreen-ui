import { Analytics, Eccomerce, ElSolution, HrSoftware, WebServices } from '@/features/stack'
import styles from './style.module.scss'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import useCertainSection from '@/utils/hooks/useCertainSection'

export default function StackPage() {
    const [ref, animate] = useAnimate()

    useCertainSection({ ref, section: 'services' })

    useEffect(() => {
        animate('a', { opacity: [0, 1] }, { delay: stagger(0.3) })
    }, [animate])

    return (<div className={styles.scrollBlock}>
        <nav ref={ref} className={styles.section}>
                <Eccomerce style={{ gridArea: 'a' }} />
                <WebServices style={{ gridArea: 'b' }} />
                <ElSolution style={{ gridArea: 'd' }}/>
                <HrSoftware style={{ gridArea: 'e' }} />
                <Analytics style={{ gridArea: 'c' }}/>
        </nav>
    </div>)
}