import { Status } from '../types/Status'

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
    status?: Status
}

export type { Form }