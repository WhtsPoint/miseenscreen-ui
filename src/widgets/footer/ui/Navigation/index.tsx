import styles from './styles.module.scss'
import { Link } from '@/utils/lib/navigation'

interface Item {
    href: string,
    text: string
}

interface Params {
    title: string,
    links: Item[]
}

export default function Navigation({ title, links }: Params) {
    return (<div className={styles.navigation}>
        <b>{title}</b>
        <nav>
            <ul>
                {links.map(({ href, text }, index) => <li key={index}>
                    <Link href={href}>{text}</Link>
                </li>)}
            </ul>
        </nav>
    </div>)
}