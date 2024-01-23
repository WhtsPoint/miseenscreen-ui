export default function chunk<T>(array: T[], size: number): T[][] {
    let init = [...array]
    const result = []

    while (init.length > 0) {
        result.push(init.slice(0, size))
        init = init.slice(size)
    }

    return result
}