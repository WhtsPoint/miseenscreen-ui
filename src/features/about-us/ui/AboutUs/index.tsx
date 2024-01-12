import styles from './styles.module.scss'
import { Information, PersonSelect } from '@/widgets/about-us'
import { useState } from 'react'
import { Person } from '@/features/about-us/types/Person'
import { useTranslations } from 'next-intl'
import daryaImage from '@/utils/assets/images/about-us/darya.jpg'
import vladimirImage from '@/utils/assets/images/about-us/vladimir.png'

export default function AboutUs() {
    const t = useTranslations('about-us')
    const [person, setPerson] = useState<Person>('darya')

    return (<div className={styles.aboutUs}>
        <Information className={styles.aboutUs__infromation} text={{
            title: t('title'),
            name: t(`person.${person}.name`),
            role: t(`person.${person}.role`),
            skills: t(`person.${person}.skills`),
            about: t(`person.${person}.about`)
        }} />
        <PersonSelect<Person>
            className={styles.aboutUs__personSelect}
            person={person}
            images={{'darya': daryaImage, 'vladimir': vladimirImage}}
        />
    </div>)
}