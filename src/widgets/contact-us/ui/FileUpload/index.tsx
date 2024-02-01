import { useTranslations } from 'next-intl'
import { useState } from 'react'
import FileUploadButton from '@/utils/ui/FileUploadButton'
import FileContainer from '@/widgets/contact-us/ui/FileContainer'
import styles from './styles.module.scss'
import buttonStyles from '../../assets/styles/button.module.scss'
import useFilesError from '@/widgets/contact-us/hooks/useFilesError'

interface Params {
    maxSize: number,
    maxCount: number
}

export default function FileUpload({ maxSize, maxCount }: Params) {
    const t = useTranslations('contact-us.form.files')
    const [files, setFiles] = useState<File[]>([])
    const error = useFilesError(files, maxCount, maxSize)

    const onFileUpload = (files: File[]) => setFiles((prev) => [...prev, ...files])
    const onDelete = (file: File) => () => setFiles((prev) => prev.filter((f) => file !== f))

    return (<div className={styles.fileUpload}>
        <div className={styles.fileUpload__title}>
            <span>{t('title')}</span>
            {error && <small className={styles.fileUpload__title__error}>{error}</small>}
        </div>
        <div className={styles.fileUpload__files}>
            {files.map((file, index) => <FileContainer key={index} file={file} onDelete={onDelete(file)}/>)}
        </div>
        <FileUploadButton className={buttonStyles.button} onFileUpload={onFileUpload} multiple={true}>
            {t('add')}
        </FileUploadButton>
        <aside>
            <small className={styles.fileUpload__tip}>
                {t('tip', { count: maxCount, size: maxSize / 10 ** 6 })}
            </small>
        </aside>
    </div>)
}