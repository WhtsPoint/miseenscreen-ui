import { useState } from 'react'
import { Person } from '../../types/Person'
import PersonInformation from '../PersonInformation'
import PersonSelect from '../PersonSelect'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string
}

export default function AboutUs({ className }: Params) {
    const [person, setPerson] = useState<Person>('darya')

    const swapPerson = () => {
        setPerson((current) => current === 'darya' ? 'vladimir' : 'darya')
    }

    return (<div className={cl(styles.aboutUs, className)}>
        <PersonSelect
            person={person}
            swapPerson={swapPerson}
            className={styles.aboutUs__personSelect}
        />
        <PersonInformation person={person} className={styles.aboutUs__infromation}/>
    </div>)
}