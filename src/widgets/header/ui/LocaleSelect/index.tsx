'use client'

import Select from '@/utils/ui/Select'
import { useLocale } from 'use-intl'
import { useRouter, usePathname } from '@/utils/lib/navigation'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import styles from './style.module.scss'
import icon from '@/utils/assets/images/planet.svg'

const selectValues = {
    'en': 'ENG',
    'ru': 'RUS',
    'ua': 'UA'
} as const satisfies Record<(typeof config.locale.locales)[number], any>

interface Params {
    className?: string
    optionClass?: string
}

export default function LocaleSelect({ className, optionClass }: Params) {
    const currentLocale = useLocale()
    const { push } = useRouter()
    const currentPath = usePathname()
    const onChange = (locale: string) => push(currentPath, { locale, scroll: false })

    return (<div data-tag={'locale-select'} className={styles.localSelect}>
        <Select
            className={cl(styles.localSelect__select, className)}
            optionClass={cl(styles.localSelect__select__options, optionClass)}
            options={selectValues}
            value={currentLocale}
            onChange={onChange}
            valueClass={styles.localSelect__select__value}
        >
            <Image src={icon.src} alt={""} width={18} height={18} />
        </Select>
    </div>)
}