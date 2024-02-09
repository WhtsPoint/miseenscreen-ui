interface FormParams {
    comment: string,
    fullName: string,
    companyName: string,
    email: string,
    employeeNumber: string,
    phone: string,
    services: string[],
    files: File[]
}

export type { FormParams }