import { type ReactNode, useState } from 'react'
import type {Person} from '../../types/Person'
import PersonInformation from '../PersonInformation'
import PersonSelect from '../PersonSelect'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    imagesChildren?: ReactNode
}

const person = 'darya'

export default function AboutUs({ className, imagesChildren }: Params) {
    return (<div className={cl(styles.aboutUs, className)}>
        <PersonSelect
            person={person}
            className={styles.aboutUs__personSelect}
            imagesChildren={imagesChildren}
        />
        <PersonInformation person={person} className={styles.aboutUs__infromation}/>
    </div>)
}