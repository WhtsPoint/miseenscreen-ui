import { motion } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

interface Params {
    props: string[]
}

export default function Props({ props }: Params) {
    return (<motion.ul
        className={sectionStyles.props}
        initial={{ opacity: 0 }}
        variants={{ inView: { opacity: 1 } }}
        transition={{ staggerChildren: 0.3 }}
    >
        {Object.values(props).map((item, index) => <motion.li
                key={index}
                className={sectionStyles.props__item}
                initial={{ opacity: 0, y: -100 }}
                variants={{ inView: { opacity: 1, y: 0 } }}
                transition={{ ease: 'linear' }}
        >
            {item}
        </motion.li>)}
    </motion.ul>)
}