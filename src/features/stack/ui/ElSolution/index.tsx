import { Props, Title } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import Particle from '@/utils/ui/Particle'
import Poster from '../Poster'
import { Link } from '@/utils/lib/navigation'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/e-learning.jpg'
import upLightImage from '@/utils/assets/images/stack/particles/up-light.png'
import glare2Image from '@/utils/assets/images/stack/particles/glare2.png'

const anim = {
    initial: { opacity: 0, y: 50 },
    viewAnimation: { opacity: 1, x: 0 }
} as const

export default function ElSolution() {
    const t = useTranslations('services.elearning')

    return (<Link
        href={config.routes.services.elearning}
        className={cl(sectionStyles.section, styles.elSolution, sectionStyles.reverse)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
        <Poster className={styles.poster} src={posterImage.src}>
            <Particle
                className={styles.upLight}
                animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
                image={{ src: upLightImage.src, sizes: '900px' }}
            />
            <Particle
                className={styles.glare}
                animation={{ ...anim, transition: { duration: 1, delay: 3 } }}
                image={{ src: glare2Image.src, sizes: '700px' }}
            />
        </Poster>
    </Link>)
}