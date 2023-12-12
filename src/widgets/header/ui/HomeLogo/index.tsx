import { Link } from '@/utils/lib/navigation'
import Logo from '@/widgets/header/ui/Logo'

export default function HomeLogo() {
    return (<Link href={'/'}><Logo /></Link>)
}