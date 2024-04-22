import Logo from '@/widgets/header/ui/Logo'
import AbstractSelect from '@/utils/ui/AbstractSelect'
import { cl } from '@/utils/lib/cl'
import Image from 'next/image'
import type { Locale } from '@/utils/types/Locale'
import styles from './styles.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'
import arrowIcon from '@/utils/assets/images/arrow.svg'

interface Params {
    locale: Locale
    onSelect: (locale: Locale) => unknown,
    onSave: () => unknown
}

const options = {
    'en': 'English',
    'ru': 'Russian',
    'ua': 'Українська'
} as const satisfies Record<Locale, any>

export default function LocaleSelect({ onSelect, locale, onSave }: Params) {
    return (<div className={styles.localeSelect}>
        Welcome to the world of custom technologies
        <Logo />
        <p><small>Select language</small></p>
        <AbstractSelect
            className={styles.localeList}
            valueClass={styles.optionValue}
            options={options}
            value={locale}
            onChange={onSelect}
            valueMap={() => <>
                {options[locale]}
                <Image
                    src={arrowIcon}
                    alt={''}
                    className={styles.arrow}
                />
            </>}
        />
        <button onClick={onSave} className={cl(buttonStyles.button, styles.save)}>Save</button>
    </div>)
}