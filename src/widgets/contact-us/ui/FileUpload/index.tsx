import type { DragEvent } from 'react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import FileContainer from '../FileContainer'
import DragOverTip from '../DragOverTip'
import { AnimatePresence, useMotionValue } from 'framer-motion'
import fileListToArray from '@/utils/lib/fileListToArray'
import FileUploadButton from '@/utils/ui/FileUploadButton'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    error?: string | null,
    onFilesChange?: (files: File[]) => unknown
}

export default function FileUpload({ error, onFilesChange }: Params) {
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
            {error && <small className={styles.fileUpload__title__error}>{error}</small>}
        </div>
        {<div className={cl(files.length > 0 && styles.fileUpload__files)}>
            <AnimatePresence>
                {files.map((file, index) =>
                    <FileContainer key={index} file={file} onDelete={onDelete(file)} />
                )}
            </AnimatePresence>
        </div>}
        <FileUploadButton
            dangerousText={t.raw('add')}
            className={styles.fileUpload__button}
            onFileUpload={onFileUpload}
            multiple={true}
        >
        </FileUploadButton>
    </div>)
}