import { useTranslations } from 'next-intl'

export default function useFilesError(
    files: Pick<File, 'name' | 'size'>[], maxCount: number, maxSize: number
): string | null {
    const t = useTranslations('contact-us.form.files.errors')

    if (files.length > maxCount) return t('count')

    for (const { name, size } of files) {
        if (size > maxSize) return t('size', { name })
    }

    return null
}