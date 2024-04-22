'use client'

import AbstractSelect from '@/utils/ui/AbstractSelect'
import { useLocale } from 'use-intl'
import { useRouter, usePathname } from '@/utils/lib/navigation'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'
import type { Locale } from '@/utils/types/Locale'
import styles from './styles.module.scss'
import icon from '@/utils/assets/images/planet.svg'

const selectValues = {
    'en': 'ENG',
    'ru': 'RUS',
    'ua': 'UA'
} as const satisfies Record<Locale, any>

interface Params {
    className?: string
    optionClass?: string
}

export default function LocaleSelect({ className, optionClass }: Params) {
    const currentLocale = useLocale() as Locale
    const { push } = useRouter()
    const currentPath = usePathname()
    const onChange = (locale: string) => push(currentPath, { locale, scroll: false })

    return (<div data-tag={'locale-select'} className={styles.localSelect}>
        <AbstractSelect<Locale>
            options={selectValues}
            value={currentLocale}
            onChange={onChange}
            valueMap={() => <>
                <Image src={icon.src} alt={""} width={18} height={18} />
                {selectValues[currentLocale]}
            </>}
            className={cl(styles.localSelect__select, className)}
            optionClass={cl(styles.localSelect__select__options, optionClass)}
            valueClass={styles.localSelect__select__value}
        />
    </div>)
}