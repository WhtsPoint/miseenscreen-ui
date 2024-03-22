import styles from './styles.module.scss'
import BasicLoading from '@/utils/ui/BasicLoading'

export default function LoadingBlock() {
    return (<div className={styles.loadingBlock}>
        <BasicLoading width={3} radius={25} color={'white'} />
    </div>)
}