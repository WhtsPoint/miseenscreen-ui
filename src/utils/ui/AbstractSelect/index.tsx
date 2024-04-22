import Container from '@/utils/ui/Container'
import { type ReactNode, useState } from 'react'
import { cl } from '@/utils/lib/cl'
import useSelectClosing from '@/utils/hooks/useSelectClosing'
import styles from './styles.module.scss'

interface Params<T extends string, V> {
    options: Record<T, string>,
    value?: V,
    onChange: (selected: T) => unknown,
    optionClass?: string,
    optionClassMap?: (value: T) => string|undefined|false,
    optionListClass?: string
    className?: string,
    valueClass?: string,
    valueMap: () => ReactNode,
    optionMap?: (value: T) => ReactNode,
    closeOnSelect?: boolean
}

export default function AbstractSelect<T extends string, V = T>(params: Params<T, V>) {
    const { closeOnSelect = true } = params
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const ref = useSelectClosing<HTMLDivElement>({ onClose: () => { setIsVisible(false) } })

    const swapVisibility = () => setIsVisible((prev) => !prev)
    const onChange = (value: T) => () => {
        closeOnSelect && setIsVisible(false)
        params.onChange(value)
    }

    const optionsEntries = Object.entries(params.options) as [T, string][]

    return (<div ref={ref} className={cl(styles.select, params.className)}>
        <button onClick={swapVisibility} data-tag={'select-value'} type={'button'} className={params.valueClass}>
            {params.valueMap()}
        </button>
        <Container tag={'select-optionList'} className={cl(styles.optionList, params.optionListClass)} isHidden={!isVisible}>
            {optionsEntries.map(([value, name]) => <button
                type={'button'}
                key={value}
                className={cl(styles.option, params.optionClass, params.optionClassMap?.(value))}
                onClick={onChange(value)}
            >
                {params.optionMap ? params.optionMap(value) : name}
            </button>)}
        </Container>
    </div>)
}