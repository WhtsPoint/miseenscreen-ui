import { type ChangeEvent, type ReactNode, useRef } from 'react'
import type { Children } from '@/utils/interfaces/Children'
import fileListToArray from '@/utils/lib/fileListToArray'

interface Params extends Partial<Children<ReactNode>> {
    multiple?: boolean,
    onFileUpload: (files: File[]) => unknown,
    dangerousText?: string,
    className?: string,
}

export default function FileUploadButton(
    { multiple, children, onFileUpload, dangerousText, ...params }: Params
) {
    const inputRef = useRef<HTMLInputElement>(null)
    const triggerInput = () => inputRef?.current?.click()
    const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        onFileUpload(files ? fileListToArray(files): [])
        event.target.value = ''
    }

    return (<>
        <button
            dangerouslySetInnerHTML={dangerousText ? { __html: dangerousText } : undefined}
            type={'button'}
            onClick={triggerInput}
            {...params}
        >
            {children}
        </button>
        <input onChange={onFileSelected} ref={inputRef} type={'file'} multiple={multiple} hidden />
    </>)
}