import { Navigation } from '@/widgets/footer'

export default function Navigate() {
    return (<Navigation title={'Navigate'} links={[
        { href: '#services', text: 'Services' },
        { href: '#out-story', text: 'Our Story' },
        { href: '#cases', text: 'Cases' },
        { href: '#support', text: 'Support' }
    ]} />)
}