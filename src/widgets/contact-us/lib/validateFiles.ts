import { ValidationRules } from '../interfaces/ValidationRules'

export default function validateFiles(
    files: File[], { maxCount, maxSize, approvedFormats }: ValidationRules['files']
) {
    if (files.length > maxCount) return { name: 'file-count', params: { maxCount } }

    for (const { name, size } of files) {
        if (size > maxSize) return { name: 'file-size', params: { name, maxSize: maxSize / 10 ** 6 } }
    }

    for (const { type, name } of files) {
        if (!approvedFormats.includes(type)) return {name: 'file-format', params: { name } }
    }

    return null
}