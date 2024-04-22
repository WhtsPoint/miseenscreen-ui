import { useEffect, useRef, useState } from 'react'
import type {EmailSubscriptionData} from '@/widgets/email-subscription'
import getEmailSubscriptions from '@/features/email-subscription/action/getEmailSubscriptions'
import useLoading from '@/utils/hooks/useLoading'

export default function useEmailSubscriptions(countOnPage: number) {
    const [subscriptions, setSubscriptions] = useState<EmailSubscriptionData[]>([])
    const [pageCount, setPageCount] = useState<number|null>(null)
    const getAndSetSubscriptionsRef = useRef(async (page: number) => {
        const paginatedSubscriptions = await getEmailSubscriptions(countOnPage, page)

        if (!paginatedSubscriptions) return

        const [subscriptions, error] = paginatedSubscriptions

        if (error !== null) return alert(error)

        setSubscriptions(subscriptions.data)
        setPageCount(Math.max(1, subscriptions.pageCount))
    })
    const [getSubscriptionsWithLoading, isLoading] = useLoading(getAndSetSubscriptionsRef.current)

    useEffect(() => {
        (async () => await getSubscriptionsWithLoading(1))()},
        [getSubscriptionsWithLoading]
    )

    return [subscriptions, pageCount, getSubscriptionsWithLoading, isLoading] as const
}