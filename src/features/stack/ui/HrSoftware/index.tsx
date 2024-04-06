import Particle from '@/utils/ui/Particle'
import Poster from '../Poster'
import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/hr-software.jpg'
import ellipseLightImage from '@/utils/assets/images/stack/particles/ellips-light.png'
import lineLightImage from '@/utils/assets/images/stack/particles/line-light.png'

export default function HrSoftware() {
    const t = useTranslations('services.hr-software')

    return (<section className={cl(sectionStyles.section, styles.hrSoftware)}>
        <Poster src={posterImage.src}>
            <Particle
                className={styles.ellipseLight}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 2.5 }
                }}
                image={{ src: ellipseLightImage.src, sizes: '(max-width: 1281px) 50vw, 25vw' }}
            />
        </Poster>
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
        <Particle
            className={styles.lineLight}
            animation={{
                initial: { opacity: 0, y: 30 },
                viewAnimation: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 2 }
            }}
            image={{ src: lineLightImage.src, sizes: '600px' }}
        />
    </section>)
}