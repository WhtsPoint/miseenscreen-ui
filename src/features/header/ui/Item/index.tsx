import animations from '@/utils/assets/styles/animation.module.scss'
import { Link } from '@/utils/lib/navigation'
import type {Children} from '@/utils/interfaces/Children'
import type {ReactNode} from 'react'
import { useSpecialSection } from '@/features/main'
import styles from './styles.module.scss'

interface Params extends Partial<Children<ReactNode>> {
    href: string,
    section?: string
}

export default function Item({ href, section, children }: Params) {
    const { invoke } = useSpecialSection()

    return (<li className={animations.underline}>
        <Link className={styles.item} href={href} onClick={() => section && invoke(section)} scroll={false}>
            {children}
        </Link>
    </li>)
}
