import type { Status } from '../types/Status'

interface Form {
    id: string,
    comment: string,
    fullName: string,
    companyName: string,
    email: string,
    employeeNumber: string,
    phone: string,
    services: string[],
    files: string[],
    postedAt?: string,
    status?: Status,
    adminComment?: string
}

export type { Form }