import { ObjectType } from '@/utils/types/ObjectType'
import styles from './style.module.scss'
import Container from '@/utils/ui/Container'
import { useState } from 'react'
import { cl } from '@/utils/lib/cl'

interface Params {
    options: ObjectType<string, string>,
    value: string,
    onChange: (selected: string) => unknown,
    optionClass?: string,
    className?: string
}

export default function Select(params: Params) {
    const { options, onChange, value, optionClass, className } = params
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const swapVisibility = () => setIsVisible((prev) => !prev)

    return (<div onClick={swapVisibility} className={cl(styles.select, optionClass, className)}>
        <span>{options[value]}</span>
        <Container className={styles.select__optionList} isShowed={isVisible}>
            {Object.entries(options).map(([value, name]) => <div
                key={value}
                className={cl(styles.select__optionList__option, optionClass)}
                onClick={() => onChange(value)}
            >
                {name}
            </div>)}
        </Container>
    </div>)
}