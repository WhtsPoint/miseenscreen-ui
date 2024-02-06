interface FormParams {
    problem: string,
    name: string,
    company: string,
    email: string,
    employeesAmount: string,
    phone: string,
    services: string[],
    files: File[]
}

export type { FormParams }