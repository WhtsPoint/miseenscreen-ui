'use client'

import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { LocaleSelect } from '@/widgets/locale-window'
import useLocalStorage from '@/utils/hooks/useLocaleStorage'
import { usePathname, useRouter } from '@/utils/lib/navigation'
import { useLocale } from 'use-intl'
import styles from './styles.module.scss'

interface Params extends Partial<Children<ReactNode>> {}

export default function LocaleWindowWrapper({ children }: Params) {
    const locale = useLocale()
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [selectedLocale, setSelectedLocale] = useState<string>(locale)
    const [isInvoked, setIsInvoked] = useLocalStorage('locale-select-invoked')
    const { push } = useRouter()
    const currentPath = usePathname()

    useEffect(() => setIsModalVisible(true), [])

    const onSave = () => {
        setIsInvoked('true')
        push(currentPath, { locale: selectedLocale, scroll: false })
    }

    return (<>
        {(isModalVisible && isInvoked !== 'true') && createPortal(
            <div className={styles.localeWindow}>
                <LocaleSelect locale={selectedLocale} onSelect={setSelectedLocale} onSave={onSave} />
            </div>,
            document.body
        )}
        {children}
    </>)
}