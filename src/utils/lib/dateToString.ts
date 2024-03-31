function getDateValues(date: Date) {
    return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + (date.getDate())).slice(-2),
        ("0" + (date.getHours())).slice(-2),
        ("0" + (date.getMinutes())).slice(-2),
    ] as const
}

export default function dateToString(date: Date): string {
    const [year, month, day] = getDateValues(date)

    return `${day}.${month}.${year}`
}

export function dateToStringWithTime(date: Date): string {
    const [year, month, day, hours, minutes] = getDateValues(date)

    return `${day}.${month}.${year} ${hours}:${minutes}`
}