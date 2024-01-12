import { ObjectType } from '@/utils/types/ObjectType'
import { StaticImageData } from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import Arrow from '@/utils/ui/Arrow'

interface Params<T extends string = string> {
    person: T,
    images: ObjectType<T, StaticImageData>,
    className?: string
}

export default function PersonSelect<T extends string = string>(
    { person, images, className }: Params<T>
) {
    return (<div className={cl(styles.personSelect, className)}>
        <Arrow className={styles.personSelect__arrow} direction={'left'} />
    </div>)
}