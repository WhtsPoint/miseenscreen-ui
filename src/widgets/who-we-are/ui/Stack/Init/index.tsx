import Image from 'next/image'
import light from '@/utils/assets/images/stack/particles/straight-line-light-horizontal.png'
import styles from './styles.module.scss'

interface Params {
    text: string
}

export default function Init({ text }: Params) {
    return (<div className={styles.init}>
        <blockquote className={styles.initText}><i>{text}</i></blockquote>
        <div className={styles.light}>
            <Image fill src={light.src} sizes={'50vw'} alt={'Straight line light'}/>
        </div>
    </div>)
}