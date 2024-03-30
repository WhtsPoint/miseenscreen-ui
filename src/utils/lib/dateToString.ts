export default function dateToString(date: Date): string {
    const [year, month, day] = [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + (date.getDate())).slice(-2),
    ]

    return `${day}.${month}.${year}`
}