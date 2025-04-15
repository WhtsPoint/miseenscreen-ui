import { Init, Main, Stack } from '@/widgets/who-we-are'
import { useTranslations } from 'next-intl'
import media from './media'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'

export default function FoxtrotStack() {
    const t = useTranslations('who-we-are.stack.foxtrot')

    return (<Stack
        media={media}
        leftLineClassName={styles.leftLineClassName}
        rightLineClassName={styles.rightLineClassName}
        className={globalStyles.section}
        defaultSpeedMultiplier={0.5}
    >
        <Init text={t('init')} />
        <Main header={t('header')} list={Object.values(t.raw('list'))} />
    </Stack>)
}