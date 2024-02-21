import { ObjectType } from '@/utils/types/ObjectType'
import { useState } from 'react'
import Container from '@/utils/ui/Container'
import { cl } from '@/utils/lib/cl'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import selectStyles from '../Select/style.module.scss'
import styles from './styles.module.scss'

interface Params<T extends string> {
    values: T[]
    options: ObjectType<string, string>,
    placeholder?: string,
    onChange: (value: T) => unknown,
    className?: string,
    valueClass?: string,
    optionClass?: string
}

export default function MultipleSelect<T extends string>(params: Params<T>) {
    const { values, options, placeholder, optionClass, onChange, valueClass, className } = params
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const ref = useSelectClosing<HTMLDivElement>({ onClose: () => { setIsVisible(false) } })

    const swapVisibility = () => setIsVisible((prev) => !prev)

    const entries = Object.entries(options) as [T, string][]
    const selectedValues = entries.filter(([value]) => values.includes(value))
        .map(([, name]) => name)
    const text = values.length > 0 ? selectedValues.join(', ') : placeholder

    return (<div ref={ref} className={cl(selectStyles.select, className)}>
        <button type={'button'} onClick={swapVisibility} className={cl(styles.select__value, valueClass)}>{text}</button>
        <Container className={cl(selectStyles.select__optionList, optionClass)} isShowed={isVisible}>
            {entries.map(([value, name]) => <button
                type={'button'}
                data-selected={values.includes(value)}
                key={value}
                className={cl(
                    selectStyles.select__optionList__option,
                    styles.select__optionList__option,
                    optionClass
                )}
                onClick={() => onChange(value)}
            >
                {name}
            </button>)}
        </Container>
    </div>)
}