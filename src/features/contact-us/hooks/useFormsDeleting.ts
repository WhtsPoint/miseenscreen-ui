import { useRef } from 'react'
import deleteForm from '@/features/contact-us/action/deleteForm'
import useLoading from '@/utils/hooks/useLoading'

export default function useFormsDeleting() {
    const deleteFormRef = useRef(deleteForm)
    const [deleteFormWithLoading, isDeleting] = useLoading(deleteFormRef.current)

    return [deleteFormWithLoading, isDeleting] as const
}