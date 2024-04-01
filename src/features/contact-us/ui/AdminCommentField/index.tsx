'use client'

import { AdminCommentField as UnfilledAdminCommentField } from '@/widgets/contact-us'
import useLoading from '@/utils/hooks/useLoading'
import updateForm from '@/features/contact-us/action/updateForm'
import useDebounce from '@/utils/hooks/useDebounce'
import BasicLoading from '@/utils/ui/BasicLoading'
import styles from './styles.module.scss'

interface Params {
    formId: string,
    initComment?: string
}

export default function AdminCommentField({ formId, initComment }: Params) {
    const [updateFormWithLoading, isLoading] = useLoading(updateForm)

    const onInput = async (value: string) => {
        const error = await updateFormWithLoading({ id: formId, adminComment: value })

        if (error) alert(error)
    }

    const changeStatus = useDebounce(onInput, 1000)

    return (<div className={styles.adminComment}>
        <UnfilledAdminCommentField onInput={changeStatus} initComment={initComment} />
        {isLoading && <BasicLoading radius={15} className={styles.loading} />}
    </div>)
}