import YMarquee from '@/utils/ui/YMarquee'
import styles from './styles.module.scss'

export default function Background() {
    return (<div className={styles.background}>
        <YMarquee className={styles.background__marquee}>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '25px', height: '25px', background: 'red' }} />
            </div>
        </YMarquee>
        {/*<YMarquee><br /></YMarquee>*/}
    </div>)
}