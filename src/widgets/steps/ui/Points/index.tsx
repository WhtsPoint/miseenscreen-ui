import VerticalLine from '../VerticalLine'

interface Params {
    className?: string,
    isInView?: boolean
}

export default function Points({ className, isInView }: Params) {
    return (<div className={className}>
        <VerticalLine isInView={isInView} />
    </div>)
}