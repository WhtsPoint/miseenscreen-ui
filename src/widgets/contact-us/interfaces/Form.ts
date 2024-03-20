interface Form {
    id: string,
    comment: string,
    fullName: string,
    companyName: string,
    email: string,
    employeeNumber: string,
    phone: string,
    services: string[],
    files: string[]
}

export type { Form }