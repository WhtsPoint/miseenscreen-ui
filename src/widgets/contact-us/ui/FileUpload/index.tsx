import { DragEvent } from 'react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import FileUploadButton from '@/utils/ui/FileUploadButton'
import FileContainer from '../FileContainer'
import DragOverTip from '../DragOverTip'
import { useMotionValue } from 'framer-motion'
import styles from './styles.module.scss'
import buttonStyles from '../../assets/styles/button.module.scss'
import fileListToArray from '@/utils/lib/fileListToArray'

interface Params {
    maxSize: number,
    maxCount: number,
    error?: string | null,
    onFilesChange?: (files: File[]) => unknown
}

export default function FileUpload({ maxSize, maxCount, error, onFilesChange }: Params) {
    const t = useTranslations('contact-us.form.files')
    const [files, setFiles] = useState<File[]>([])
    const isDragOver = useMotionValue<boolean>(false)

    useEffect(() => { onFilesChange && onFilesChange(files) }, [onFilesChange, files])

    const onFileUpload = (files: File[]) => setFiles((prev) => [...prev, ...files])
    const onDelete = (file: File) => () => setFiles((prev) => prev.filter((f) => file !== f))
    const onDragOver = (event: DragEvent<HTMLDivElement>) => {
        isDragOver.set(true)
        event.preventDefault()

    }
    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        isDragOver.set(false)
        onFileUpload(fileListToArray(event.dataTransfer.files))
    }

    return (<div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={() => isDragOver.set(false)}
        className={styles.fileUpload}
    >
        <DragOverTip isDragOver={isDragOver} />
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