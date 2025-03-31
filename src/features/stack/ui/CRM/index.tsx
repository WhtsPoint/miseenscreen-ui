import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { Props, Title } from '@/widgets/stack'
import Poster from '../Poster'
import Particle from '@/utils/ui/Particle'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/crm.jpg'
import circleImage from '@/utils/assets/images/stack/particles/crm.png'
import xLightImage from '@/utils/assets/images/stack/particles/x-light.png'
import styles from './styles.module.scss'

export default function CRM() {
    const t = useTranslations('services.crm')

    const props = Object.values(t.raw('props')).map(({ title }: any) => title)

    return (<Link className={sectionStyles.section} href={config.routes.services.crm}>
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
        <Poster src={posterImage.src} className={sectionStyles.section}>
            <Particle
                className={styles.centerParticle}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 2 }
                }}
                image={{ src: circleImage.src, sizes: '1100px' }}
            />
            <Particle
                className={styles.centerParticle}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 2 }
                }}
                image={{ src: xLightImage.src, sizes: '1100px' }}
            />
        </Poster>
    </Link>)
}