type Class = string | undefined | null | false

export function cl(...classes: Class[]) {
    return classes.filter((c) => ![undefined, null, false, '']
        .includes(c))
        .join(' ')
}