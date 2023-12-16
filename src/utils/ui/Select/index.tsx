import { ObjectType } from '@/utils/types/ObjectType'
import styles from './style.module.scss'
import Container from '@/utils/ui/Container'
import { ReactNode, useState } from 'react'
import { cl } from '@/utils/lib/cl'
import { Children } from '@/utils/interfaces/Children'

interface Params extends Partial<Children<ReactNode>> {
    options: ObjectType<string, string>,
    value: string,
    onChange: (selected: string) => unknown,
    optionClass?: string,
    className?: string,
    valueClass?: string
}

export default function Select(params: Params) {
    const {options, onChange, value, optionClass, className, children, valueClass } = params
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const swapVisibility = () => setIsVisible((prev) => !prev)

    return (<div onClick={swapVisibility} className={cl(styles.select, className)}>
        <div className={valueClass}>{children}{options[value]}</div>
        <Container className={cl(styles.select__optionList, optionClass)} isShowed={isVisible}>
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