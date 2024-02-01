import { ChangeEvent, ReactNode, useRef } from 'react'
import { Children } from '@/utils/interfaces/Children'
import fileListToArray from '@/utils/lib/fileListToArray'

interface Params extends Partial<Children<ReactNode>> {
    multiple?: boolean,
    onFileUpload: (files: File[]) => unknown,
    className?: string
}

export default function FileUploadButton({ multiple, children, onFileUpload, className }: Params) {
    const inputRef = useRef<HTMLInputElement>(null)
    const triggerInput = () => inputRef?.current?.click()
    const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        onFileUpload(files ? fileListToArray(files): [])
        event.target.value = ''
    }

    return (<>
        <button className={className} type={'button'} onClick={triggerInput}>{children}</button>
        <input onChange={onFileSelected} ref={inputRef} type={'file'} multiple={multiple} hidden />
    </>)
}