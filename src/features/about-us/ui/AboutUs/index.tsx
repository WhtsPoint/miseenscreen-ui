import styles from './styles.module.scss'
import { useState } from 'react'
import { Person } from '@/features/about-us/types/Person'
import PersonInformation from '@/features/about-us/ui/PersonInformation'
import PersonSelect from '@/features/about-us/ui/PersonSelect'

export default function AboutUs() {
    const [person, setPerson] = useState<Person>('darya')

    const swapPerson = () => {
        setPerson((current) => current === 'darya' ? 'vladimir' : 'darya')
    }

    return (<div className={styles.aboutUs}>
        <PersonInformation person={person} className={styles.aboutUs__infromation}/>
        <PersonSelect
            person={person}
            swapPerson={swapPerson}
            className={styles.aboutUs__personSelect}
        />
    </div>)
}