'use client'

import { CallFormAccordion } from '@/widgets/contact-us'
import Pagination, { usePagination } from '@/utils/ui/Pagination'
import LoadingBlock from '@/utils/ui/LoadingBlock'
import useForms from '../../hooks/useForms'
import useFormsDeleting from '../../hooks/useFormsDeleting'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    countOnPage: number
}

export default function CallFormsList({ countOnPage, className }: Params) {
    const [forms, pageCount, getForms, isLoading] = useForms(countOnPage)
    const [deleteForm, isDeleting] = useFormsDeleting()
    const pagination = usePagination(pageCount, getForms)

    const onDeleteButtonClick = (id: string) => async () => {
        const error = await deleteForm(id)

        if (error) return alert(error)

        pagination.pageCount && await getForms(pagination.page)
    }

    return (<div className={cl(styles.callFormList, className)}>
        <ul className={styles.callFormList__list}>
            {(isLoading || isDeleting) ? <LoadingBlock /> : forms.map((form) => <CallFormAccordion
                key={form.id}
                form={form}
                onDeleteButtonClick={onDeleteButtonClick(form.id)}
            />)}
        </ul>
        <Pagination pagination={pagination}  />
    </div>)
}