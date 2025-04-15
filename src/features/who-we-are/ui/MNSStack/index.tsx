import { Init, Main, Stack } from '@/widgets/who-we-are'
import { useTranslations } from 'next-intl'
import media from './media'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'

export default function MNSStack() {
    const t = useTranslations('who-we-are.stack.mns')

    return (<Stack
        media={media}
        className={globalStyles.section}
        reverse={true}
        defaultSpeedMultiplier={0.5}
    >
        <Init text={t('init')} />
        <Main header={t('header')} list={Object.values(t.raw('list'))} />
    </Stack>)
}