import { Navigation } from '@/widgets/footer'

export default function SocialMedia() {
    return (<Navigation title={'Social Media'} links={[
        { href: '#', text: 'Instagram' },
        { href: '#', text: 'Facebook' },
        { href: '#', text: 'Youtube' },
        { href: '#', text: 'Twitter' }
    ]} />)
}