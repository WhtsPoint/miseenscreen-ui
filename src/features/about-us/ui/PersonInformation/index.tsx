import type {Person} from '@/features/about-us/types/Person'
import { Information } from '@/widgets/about-us'
import { useTranslations } from 'next-intl'

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
        about: t(`person.${person}.about`)
    }} />)
}