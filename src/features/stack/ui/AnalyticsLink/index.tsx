import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { useSpecialSection } from '@/features/main'
import styles from './styles.module.scss'

type LinkParams = Parameters<typeof Link>[0]

interface Params extends Omit<LinkParams, 'href' | 'onClick'> {}

export default function AnalyticsLink({ children, ...params }: Params) {
    const { invoke } = useSpecialSection()

    return (<Link
        className={styles.link}
        href={config.routes.services.analytics}
        onClick={() => invoke('custom-erp')}
        scroll={false}
        {...params}
    >
        {children}
    </Link>)
}