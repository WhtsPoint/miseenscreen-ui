import { Navigation } from '@/widgets/footer'

export default function Official() {
    return (<Navigation title={'Official'} links={[
        { href: '#', text: 'Privacy Policy' },
        { href: '#', text: 'Terms' }
    ]} />)
}