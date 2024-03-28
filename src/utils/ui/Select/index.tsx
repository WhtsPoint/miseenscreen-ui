import { ObjectType } from '@/utils/types/ObjectType'
import Container from '@/utils/ui/Container'
import { ReactNode, useState } from 'react'
import { cl } from '@/utils/lib/cl'
import { Children } from '@/utils/interfaces/Children'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import styles from './style.module.scss'

interface Params extends Partial<Children<ReactNode>> {
    options: ObjectType<string, string>,
    value?: string,
    onChange: (selected: string) => unknown,
    optionClass?: string,
    className?: string,
    valueClass?: string,
    placeholder?: string
}

export default function Select(params: Params) {
    const {options, onChange, value, optionClass, className, children, valueClass, placeholder } = params
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const ref = useSelectClosing<HTMLDivElement>({ onClose: () => { setIsVisible(false) } })

    const swapVisibility = () => setIsVisible((prev) => !prev)

    return (<div ref={ref} onClick={swapVisibility} className={cl(styles.select, className)}>
        <button data-tag={'select-value'} type={'button'} className={cl(styles.select__value, valueClass)}>
            {children}<span>{value ? options[value] : placeholder}</span>
        </button>
        <Container tag={'select-optionList'} className={cl(styles.select__optionList, optionClass)} isHidden={!isVisible}>
            {Object.entries(options).map(([value, name]) => <button
                type={'button'}
                key={value}
                className={cl(styles.select__optionList__option, optionClass)}
                onClick={() => onChange(value)}
            >
                {name}
            </button>)}
        </Container>
    </div>)
}