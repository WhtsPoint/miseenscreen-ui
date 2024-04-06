import { Props as ServicesProps } from '@/widgets/services'

type ServicesPropsParams = Parameters<typeof ServicesProps>[0]

interface Params extends Omit<ServicesPropsParams, 'listTransition' | 'transition'>{}

export default function Props(params: Params) {
    return <ServicesProps
        listTransition={{ staggerChildren: 0.2 }}
        transition={{ duration: 0.5 }}
        {...params}
    />
}