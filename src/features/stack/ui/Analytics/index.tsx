import Poster from '../Poster'
import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/analytics.jpg'
import taiLightImage from '@/utils/assets/images/stack/particles/tail-light.png'
import sphereLightImage from '@/utils/assets/images/stack/particles/sphere-light.png'

const anim = {
    initial: { opacity: 0, y: 30 },
    viewAnimation: { opacity: 1, y: 0 },
} as const

export default function Analytics() {
    const t = useTranslations('services.custom-erp')

    let props: string[] = []

    //TODO: Refactor with types
    Object.values(t.raw('segments')).forEach((segment: any) => {
        return Object.values(segment['props']).forEach(({ title }: any) => props.push(title))
    })

    return (<Link
        href={config.routes.services.analytics}
        className={cl(sectionStyles.section, styles.analytics, sectionStyles.reverse)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
        <Poster className={styles.poster} src={posterImage.src}>
            <Particle
                className={styles.tailLight}
                animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
                image={{ src: taiLightImage.src, sizes: '50vw' }}
            />
            <Particle
                className={styles.sphereLight}
                animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
                image={{ src: sphereLightImage.src, sizes: '400px' }}
            />
        </Poster>
    </Link>)
}