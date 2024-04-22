import { useEffect, useRef, useState } from 'react'
import type {FormData} from '@/widgets/contact-us'
import getAndSetFormsWithPages from '../utils/getAndSetFormsWithPages'
import useLoading from '@/utils/hooks/useLoading'

export default function useForms(countOnPage: number) {
    const [forms, setForms] = useState<FormData[]>([])
    const [pageCount, setPageCount] = useState<number|null>(null)
    const getAndSetFormsRef = useRef(getAndSetFormsWithPages(countOnPage, setForms, setPageCount))
    const [getAndSetFormsWithLoading, isLoading] = useLoading(getAndSetFormsRef.current)

    useEffect(
        () => {(async () => { await getAndSetFormsWithLoading(1) })()},
        [getAndSetFormsWithLoading]
    )

    return [forms, pageCount, getAndSetFormsWithLoading, isLoading] as const
}