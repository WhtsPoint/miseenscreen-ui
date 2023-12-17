import styles from './style.module.scss'
import { forwardRef } from 'react'
import { Analytics, Eccomerce, ElSolution, HrSoftware, WebServices } from '@/features/header/stack'

const StackPage = forwardRef<HTMLSelectElement>((params, ref) => {
    return (<section ref={ref} className={styles.section}>
        <div className={styles.position}>
            <Eccomerce style={{ gridArea: 'a'}} />
            <WebServices style={{ gridArea: 'b'} } />
            <Analytics style={{ gridArea: 'c'}}/>
            <ElSolution style={{ gridArea: 'd'}}/>
            <HrSoftware style={{ gridArea: 'e'}} />
        </div>
    </section>)
})

StackPage.displayName = 'StackPage'

export default StackPage