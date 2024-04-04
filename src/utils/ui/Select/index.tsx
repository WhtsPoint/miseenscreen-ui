import AbstractSelect from '@/utils/ui/AbstractSelect'

type AbstractSelectParams<T extends string> = Parameters<typeof AbstractSelect<T>>[0]

interface Params<T extends string> extends Pick<
    AbstractSelectParams<T>,
    'options' | 'onChange' | 'optionClass' | 'valueClass' | 'className'
> {
    value: T,
    placeholder?: string
}


export default function Select<T extends string>(params: Params<T>) {
    const { placeholder, ...rest } = params
    return (<AbstractSelect<T>
        valueMap={() => params.value ? params.value : placeholder}
        {...rest}
    />)
}