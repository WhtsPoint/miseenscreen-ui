
export default function validateFiles(files: File[], maxCount: number, maxSize: number) {
    if (files.length > maxCount) return { name: 'file-count' }

    for (const { name, size } of files) {
        if (size > maxSize) return { name: 'file-size', params: { name } }
    }

    return null
}