import styles from './styles.module.scss'
import { Description } from '../../interfaces/Description'
import { cl } from '@/utils/lib/cl'

interface Params {
    text: Description,
    className?: string
}

export default function Information({ text, className }: Params) {
    return (<div className={cl(styles.information, className)}>
        <div className={styles.information__block}>
            <h2 className={styles.information__title}>{text.title}</h2>
            <h3 className={styles.information__name}>{text.name}</h3>
            <b className={styles.information__role}>{text.role}</b>
            <p>{text.skills}</p>
        </div>
        <hr className={styles.information__hr} />
        <div className={styles.information__block}>
            <p>{text.about}</p>
        </div>
    </div>)
}