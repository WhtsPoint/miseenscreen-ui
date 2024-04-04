import Logo from '@/widgets/header/ui/Logo'
import Select from '../../../../utils/ui/AbstractSelect'
import config from '@/utils/config'
import { cl } from '@/utils/lib/cl'
import Image from 'next/image'
import styles from './styles.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'
import arrowIcon from '@/utils/assets/images/arrow.svg'

interface Params {
    locale: string
    onSelect: (locale: string) => unknown,
    onSave: () => unknown
}

const options = {
    'en': 'English',
    'ru': 'Russian',
    'ua': 'Українська'
} as const satisfies Record<(typeof config.locale.locales)[number], any>

export default function LocaleSelect({ onSelect, locale, onSave }: Params) {
    return (<div className={styles.localeSelect}>
        Welcome to the world of custom technologies
        <Logo />
        <p><small>Select language</small></p>
        <Select
            className={styles.localeList}
            valueClass={styles.optionValue}
            options={options}
            value={locale}
            onChange={onSelect}
            rightChildren={<Image
                src={arrowIcon}
                alt={''}
                className={styles.arrow}
            />}
        />
        <button onClick={onSave} className={cl(buttonStyles.button, styles.save)}>Save</button>
    </div>)
}