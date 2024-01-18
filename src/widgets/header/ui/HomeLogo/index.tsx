import { Link } from '@/utils/lib/navigation'
import Logo from '@/widgets/header/ui/Logo'

interface Params {
    className?: string
}

export default function HomeLogo({ className }: Params) {
    return (<Link className={className} href={'/'}><Logo /></Link>)
}