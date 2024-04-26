import { Select } from '@/widgets/about-us'
import type {Person} from '../../types/Person'
import type {ReactNode} from 'react'
import daryaImage from '@/utils/assets/images/about-us/darya.png'
import vladimirImage from '@/utils/assets/images/about-us/vladimir.png'

interface Params {
    person: Person,
    swapPerson?: () => unknown,
    className?: string,
    imagesChildren?: ReactNode
}

export default function PersonSelect({ className, person, swapPerson, imagesChildren }: Params) {
    return (<Select<Person>
        className={className}
        person={person}
        onNext={swapPerson}
        onPrev={swapPerson}
        images={{ 'darya': daryaImage }}
        imagesChildren={imagesChildren}
    />)
}