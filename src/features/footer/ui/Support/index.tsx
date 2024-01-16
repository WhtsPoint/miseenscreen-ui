import { Navigation } from '@/widgets/footer'

export default function Support() {
    return (<Navigation title={'Support'} links={[
        { href: '#', text: 'We’re here M-F 7am - 7pm PST.' },
        { href: '#', text: 'Drop us a note anytime: supportmin' },
        { href: '#', text: 'Do Not Sell or Share My Personal Information' },
        { href: '#', text: 'Cookie Preferences' }
    ]} />)
}