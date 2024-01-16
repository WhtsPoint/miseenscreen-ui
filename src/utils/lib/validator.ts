function isEmail(value: string): boolean {
    return value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null
}

export { isEmail }