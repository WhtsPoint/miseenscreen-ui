import styles from './styles.module.scss'
import { Link } from '@/utils/lib/navigation'

interface Item {
    href: string,
    text: string,
    onClick?: () => unknown,
    scroll?: boolean
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
                {links.map(({ text, ...params }, index) => <li key={index}>
                    <Link {...params}>{text}</Link>
                </li>)}
            </ul>
        </nav>
    </div>)
}