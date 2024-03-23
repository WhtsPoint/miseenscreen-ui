'use client'

import useEmailSubscriptions from '../../hooks/useEmailSubscriptions'
import Pagination, { usePagination } from '@/utils/ui/Pagination'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import LoadingBlock from '@/utils/ui/LoadingBlock'
import { EmailSubscription } from '@/widgets/email-subscription'
import useDeleteEmailSubscription from '@/features/email-subscription/hooks/useDeleteEmailSubscription'
import { useEffect } from 'react'

interface Params {
    countOnPage: number,
    className?: string
}

export default function EmailSubscriptionsList({ countOnPage, className }: Params) {
    const [subscriptions, pageCount, getEmails, isLoading] = useEmailSubscriptions(countOnPage)
    const [deleteSubscription, isDeleting] = useDeleteEmailSubscription()
    const pagination = usePagination(getEmails)

    useEffect(() => { pageCount && pagination.setPageCount(pageCount) }, [pageCount, pagination])

    const onDeleteButtonClick = (id: string) => async () => {
        const error = await deleteSubscription(id)

        if (error) return alert(error)

        await getEmails(pagination.current)
    }

    return (<div className={cl(styles.subscriptionsList, className)}>
        <ul className={styles.subscriptionsList__list}>
            {(isLoading || isDeleting) ? <LoadingBlock /> : subscriptions.map((subscription) => {
                return <EmailSubscription
                    key={subscription.id}
                    emailSubscription={subscription}
                    onDeleteButtonClick={onDeleteButtonClick(subscription.id)}
                />
            })}
        </ul>
        <Pagination pagination={pagination} />
    </div>)
}