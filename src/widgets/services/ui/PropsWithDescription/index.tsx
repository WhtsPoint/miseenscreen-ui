import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { Prop } from '@/widgets/services/intefaces/Prop'
import { cl } from '@/utils/lib/cl'

interface Params {
    props: Prop[]
}

export default function PropsWithDescription({ props }: Params) {
    return (<dl className={sectionStyles.dl}>
        {Object.values<Prop>(props).map(({ title, details }, index) => {
            return <div key={index} className={sectionStyles.dl__item}>
                <dt className={cl(sectionStyles.dl__item__title, sectionStyles.props__item)}>{title}</dt>
                <dd className={sectionStyles.dl__item__details}>{details}</dd>
            </div>
        })}
    </dl>)
}