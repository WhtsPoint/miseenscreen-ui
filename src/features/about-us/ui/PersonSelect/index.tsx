import { Person } from '../../types/Person'
import daryaImage from '@/utils/assets/images/about-us/darya.png'
import vladimirImage from '@/utils/assets/images/about-us/vladimir.png'
import { Select } from '@/widgets/about-us'

interface Params {
    person: Person,
    swapPerson: () => unknown,
    className?: string
}

export default function PersonSelect({ className, person, swapPerson }: Params) {
    return (<Select<Person>
        className={className}
        person={person}
        onNext={swapPerson}
        onPrev={swapPerson}
        images={{'darya': daryaImage, 'vladimir': vladimirImage}}
    />)
}