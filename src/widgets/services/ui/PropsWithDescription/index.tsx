import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { Prop } from '@/widgets/services/intefaces/Prop'
import { motion } from 'framer-motion'
import { cl } from '@/utils/lib/cl'

interface Params {
    props: Prop[]
}

export default function PropsWithDescription({ props }: Params) {
    return (<motion.dl
        className={sectionStyles.dl}
        transition={{ staggerChildren: 0.3 }}
    >
        {Object.values<Prop>(props).map(({ title, details }, index) => {
            return <motion.div
                key={index}
                className={sectionStyles.dl__item}
                initial={{ opacity: 0 }}
                variants={{ inView: { opacity: 1, y: [-100, 0] } }}
                transition={{ ease: 'linear' }}
            >
                <dt className={cl(sectionStyles.dl__item__title, sectionStyles.props__item)}>{title}</dt>
                <dd className={sectionStyles.dl__item__details}>{details}</dd>
            </motion.div>
        })}
    </motion.dl>)
}