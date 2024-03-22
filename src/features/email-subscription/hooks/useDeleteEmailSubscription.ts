import { useRef } from 'react'
import deleteEmailSubscription from '../action/deleteEmailSubscription'
import useLoading from '@/utils/hooks/useLoading'

export default function useDeleteEmailSubscription() {
    const deleteSubscriptionRef = useRef(deleteEmailSubscription)
    return useLoading(deleteSubscriptionRef.current)
}