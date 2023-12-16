import styles from './style.module.scss'
import { forwardRef, Ref } from 'react'



const StackPage = forwardRef<HTMLSelectElement>((params, ref) => {
    return (<section ref={ref} className={styles.section}>
        <article>
            BOUUUUUUND
        </article>
    </section>)
})

StackPage.displayName = 'StackPage'

export default StackPage