export default function fileListToArray(files: FileList): File[] {
    const result = []

    for (let i = 0; i < files.length; i++) {
        const item = files.item(i)
        item && result.push(item)
    }

    return result
}