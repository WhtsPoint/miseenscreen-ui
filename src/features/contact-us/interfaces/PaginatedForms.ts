import { FormData } from '@/widgets/contact-us'

interface PaginatedForms {
    data: FormData[],
    pageCount: number
}

export type { PaginatedForms }