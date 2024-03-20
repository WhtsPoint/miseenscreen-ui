'use client'

import { CallFormAccordion } from '@/widgets/contact-us'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import Pagination, { usePagination } from '@/utils/ui/Pagination'

interface Params {
    className?: string
}

export default function CallFormsList({ className }: Params) {
    const pagination = usePagination(10)

    const callForms = [{
        id: '1',
        comment: 'a'.repeat(1000),
        fullName: 'b',
        companyName: 'c',
        email: 'asd',
        employeeNumber: 'sad',
        phone: 'sadsad',
        services: ['a', 'b', 'c', 'd'],
        files: ['a', 'b']
    }]

    return (<section className={cl(styles.callFormList, className)}>
        <ul className={styles.callFormList__list}>
            {callForms.map((callForm) => <CallFormAccordion key={callForm.id} form={callForm} />)}
        </ul>
        <Pagination pagination={pagination}  />
    </section>)
}