import { forwardRef } from 'react'
import { Analytics, Eccomerce, ElSolution, HrSoftware, WebServices } from '../../../../features/stack'
import styles from './style.module.scss'


const StackPage = forwardRef<HTMLSelectElement>((_params, ref) => {
    return (<div className={styles.scrollBlock}>
        <section ref={ref} className={styles.section}>
                <Eccomerce style={{ gridArea: 'a' }} />
                <WebServices style={{ gridArea: 'b' }} />
                <ElSolution style={{ gridArea: 'd' }}/>
                <HrSoftware style={{ gridArea: 'e' }} />
                <Analytics style={{ gridArea: 'c' }}/>
        </section>
    </div>)
})

StackPage.displayName = 'StackPage'

export default StackPage