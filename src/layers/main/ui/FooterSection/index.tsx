import { Footer, FooterBackground } from '@/features/footer'
import { cl } from '@/utils/lib/cl'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Params extends Partial<Children<ReactNode>> {
    className?: string
}

export default function FooterSection({ className, children }: Params) {
    return (<div className={cl(styles.footerSection, className)}>
        {children}
        <FooterBackground className={styles.footerSection__background} />
        <h2 className={styles.footerSection__title}>MISEENSCREEN</h2>
        <Footer />
    </div>)
}