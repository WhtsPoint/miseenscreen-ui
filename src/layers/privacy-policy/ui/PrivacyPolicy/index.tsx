import { HeaderTheme } from '@/features/header'
import { getTranslations } from 'next-intl/server'
import styles from './styles.module.scss'
import { Fragment } from 'react'

export default async function PrivacyPolicy() {
    const t = await getTranslations('privacy-policy')

    return (<>
        <HeaderTheme theme={'solid'} />
        <section className={styles.privacyPolicy}>
            <h1>{t('title')}</h1>
            <h2>{t('section.0.title')}</h2>
            <p>{t('section.0.paragraph')}</p>
            <h2>{t('section.1.title')}</h2>
            {Object.values(t.raw('section.1.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <dl>
                {Object.values(t.raw('section.1.description-list'))
                    .map(({ title, description }, i) => {
                    return (<Fragment key={i}>
                        <dt>{title}</dt>
                        <dd>{description}</dd>
                    </Fragment>)
                })}
            </dl>
            {Object.values(t.raw('section.1.paragraph-1')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.2.title')}</h2>
            {Object.values(t.raw('section.2.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.3.title')}</h2>
            {Object.values(t.raw('section.3.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.4.title')}</h2>
            {Object.values(t.raw('section.4.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.5.title')}</h2>
            {Object.values(t.raw('section.5.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.6.title')}</h2>
            {Object.values(t.raw('section.6.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.7.title')}</h2>
            {Object.values(t.raw('section.7.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.8.title')}</h2>
            {Object.values(t.raw('section.8.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
            <h2>{t('section.9.title')}</h2>
            {Object.values(t.raw('section.9.paragraph')).map((p, i) => {
                return <p key={i}>{p}</p>
            })}
        </section>
    </>)
}