'use client'

import { Status, StatusSwitcher as UnfilledStatusSwitcher } from '@/widgets/contact-us'
import useDebounce from '@/utils/hooks/useDebounce'
import updateForm from '@/features/contact-us/action/updateForm'
import useLoading from '@/utils/hooks/useLoading'
import BasicLoading from '@/utils/ui/BasicLoading'
import styles from './styles.module.scss'

interface Params {
    initStatus?: Status,
    formId: string
}

export default function StatusSwitcher({ initStatus, formId }: Params) {
    const [updateFormWithLoading, isLoading] = useLoading(updateForm)

    const onChange = async (status: Status) => {
        const error = await updateFormWithLoading({ id: formId, status })

        if (error) alert(error)
    }

    const changeStatus = useDebounce(onChange, 2000)

    return (<div className={styles.statusSwitcher}>
        <UnfilledStatusSwitcher onChange={changeStatus} initStatus={initStatus} />
        {isLoading && <BasicLoading radius={15} className={styles.loading} />}
    </div>)
}