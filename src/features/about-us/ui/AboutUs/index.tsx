import styles from './styles.module.scss'
import { useState } from 'react'
import { Person } from '../../types/Person'
import PersonInformation from '../PersonInformation'
import PersonSelect from '../PersonSelect'

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