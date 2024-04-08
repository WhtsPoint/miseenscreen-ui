import Particle from '@/utils/ui/Particle'
import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import Poster from '@/features/stack/ui/Poster'
import { cl } from '@/utils/lib/cl'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/web-portals.jpg'
import styles from './styles.module.scss'
import straightLightImage from '@/utils/assets/images/stack/particles/straight-line-light.png'
import xLightImage from '@/utils/assets/images/stack/particles/x-light.png'

export default function WebPortals() {
    const t = useTranslations('services.web-portals')

    //TODO: Refactor with types
    const props = Object.values(t.raw('props')).map(({ title }: any) => title)

    return (<section className={cl(sectionStyles.section, styles.webPortals)}>
        <Poster className={styles.poster} src={posterImage.src}>
            <Particle
                className={styles.straightLight}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 1 }
                }}
                image={{ src: straightLightImage.src, sizes: '200px' }}
            />
        </Poster>
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
        <Particle
            className={styles.xLight}
            animation={{
                initial: { opacity: 0, y: 50 },
                viewAnimation: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 1 }
            }}
            image={{ src: xLightImage.src, sizes: '1200px' }}
        />
    </section>)
}