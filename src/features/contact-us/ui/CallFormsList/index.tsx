'use client'

import { CallFormAccordion } from '@/widgets/contact-us'
import Pagination, { usePagination } from '@/utils/ui/Pagination'
import LoadingBlock from '@/utils/ui/LoadingBlock'
import useForms from '../../hooks/useForms'
import useFormsDeleting from '../../hooks/useFormsDeleting'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import StatusSwitcher from '../StatusSwitcher'
import { frame } from 'framer-motion'

interface Params {
    className?: string,
    countOnPage: number
}

export default function CallFormsList({ countOnPage, className }: Params) {
    const [forms, pageCount, getForms, isLoading] = useForms(countOnPage)
    const pagination = usePagination(getForms)
    const [deleteForm, isDeleting] = useFormsDeleting()

    useEffect(() => { pageCount && pagination.setPageCount(pageCount) }, [pageCount, pagination])

    const onDeleteButtonClick = (id: string) => async () => {
        const error = await deleteForm(id)

        if (error) return alert(error)

        pagination.pageCount && await getForms(pagination.current)
    }

    return (<div className={cl(styles.callFormList, className)}>
        <ul className={styles.callFormList__list}>
            {(isLoading || isDeleting) ? <LoadingBlock /> : forms.map((form) => <CallFormAccordion
                key={form.id}
                form={form}
                onDeleteButtonClick={onDeleteButtonClick(form.id)}
                statusComponent={<StatusSwitcher formId={form.id} initStatus={form.status} />}
            />)}
        </ul>
        {pageCount && <Pagination pagination={pagination}  />}
    </div>)
}