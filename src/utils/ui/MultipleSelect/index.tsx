import AbstractSelect from '@/utils/ui/AbstractSelect'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

type AbstractSelectParams<T extends string> = Parameters<typeof AbstractSelect<T>>[0]

interface Params<T extends string> extends Pick<
    AbstractSelectParams<T>,
    'options' | 'onChange' | 'optionClass' | 'valueClass' | 'className'
> {
    values: T[],
    placeholder?: string
}

export default function MultipleSelect<T extends string>(params: Params<T>) {
    const { className, valueClass, placeholder, ...rest } = params
    const entries = Object.entries(params.options) as [T, string][]
    const selectedValues = entries.filter(([value]) => params.values.includes(value)).map(([, name]) => name)

    return (<AbstractSelect<T, T[]>
        className={cl(styles.select, className)}
        valueClass={cl(styles.value, valueClass)}
        optionClassMap={(value) => params.values.includes(value) && styles.selectedOption}
        value={params.values}
        valueMap={() => selectedValues.length > 0 ? selectedValues.join(', ') : placeholder}
        closeOnSelect={false}
        {...rest}
    />)
}