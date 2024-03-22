import { EmailSubscriptionData } from '@/widgets/email-subscription'

interface PaginatedEmailSubscriptions {
    data: EmailSubscriptionData[],
    pageCount: number
}

export type { PaginatedEmailSubscriptions }