import ArticleTableWithLogo from '@/features/blog/ui/ArticleTableWithLogo'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { cl } from '@/utils/lib/cl'
import type { BlogPreviewV2 } from '@/widgets/blog'
import styles from './styles.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'
import glareImage from '@/utils/assets/images/stack/particles/x-light.png'

import Particle from '@/utils/ui/Particle'
interface Params {
    blogs: BlogPreviewV2[]
}

export default function ArticleTableWithButtonAndLogo(params: Params) {
    const children = {
        1: <Particle
            className={styles.particle}
            animation={{ viewAnimation: {}}}
            image={{ src: glareImage.src, sizes: '200px' }}
            isInView={true}
        />
    }

    return (<section className={styles.section}>
        <ArticleTableWithLogo {...params} blogsChildren={children} />
        <Link href={config.routes.blog} className={cl(styles.moreButton, buttonStyles.button)}>Learn more</Link>
    </section>)
}