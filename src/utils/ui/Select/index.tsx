import { ObjectType } from '@/utils/types/ObjectType'
import styles from './style.module.scss'
import Container from '@/utils/ui/Container'
import { useState } from 'react'

interface Params {
    options: ObjectType<string, string>,
    value: string,
    onChange: (selected: string) => unknown
}

export default function Select({ options, onChange, value }: Params) {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const swapVisibility = () => setIsVisible((prev) => !prev)

    return (<div onClick={swapVisibility} className={styles.select}>
        <span>{options[value]}</span>
        <Container className={styles.select__optionList} isVisible={isVisible}>
            {Object.entries(options).map(([value, name]) => <div
                key={value}
                className={styles.select__optionList__option}
                onClick={() => onChange(value)}
            >
                {name}
            </div>)}
        </Container>
    </div>)
}