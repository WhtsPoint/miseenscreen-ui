import { Form } from '@/widgets/contact-us'

interface Params {
    className?: string
}

export default function FilledForm(params: Params) {
    return (<Form onSend={console.log} {...params} />)
}
