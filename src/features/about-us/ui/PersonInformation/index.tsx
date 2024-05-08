import type { Person } from '@/features/about-us/types/Person'
import { Information } from '@/widgets/about-us'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import styles from './styles.module.scss'

interface Params {
    person: Person,
    className?: string
}

export default function PersonInformation({ person, className }: Params) {
    const t = useTranslations('about-us')

    return (<Information className={className} text={{
        title: t('title'),
        name: t(`person.${person}.name`),
        role: t(`person.${person}.role`),
        skills: t(`person.${person}.skills`),
        about: t(`person.${person}.about`),
        story: t.rich(
            `person.story`,
            { 'to-story': (chunks) => <Link className={styles.toStory} href={config.routes.header.ourStory}>{chunks}</Link> }
        )
    }} />)
}