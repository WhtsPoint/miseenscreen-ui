import menuIcon from '@/utils/assets/images/menu.svg'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useState } from 'react'

interface Params extends Children<ReactNode> {}

export default function List({ children }: Params) {
    const [isHidden, setIsHidden] = useState<boolean>(true)

    return (<div className={styles.list}>
        <button onClick={() => setIsHidden((prev) => !prev)} className={styles.list__button}>
            <Image alt={''} src={menuIcon} />
        </button>
        {!isHidden && <div className={styles.list__list}>{children}</div>}
    </div>)
}