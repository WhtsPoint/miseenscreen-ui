'use client'

import type { Form } from '../../interfaces/Form'
import Accordion from '@/utils/ui/Accordion'
import styles from './styles.module.scss'
import XIcon from '@/utils/ui/xIcon'
import { dateToStringWithTime } from '@/utils/lib/dateToString'
import type { ReactNode } from 'react'

interface Params {
    form: Form,
    onDeleteButtonClick: () => unknown,
    statusComponent: ReactNode,
    adminCommentComponent: ReactNode
}

export default function CallFormAccordion({ form, onDeleteButtonClick, statusComponent, adminCommentComponent }: Params) {
    const { comment, fullName, companyName, email, phone, services, files, id, postedAt } = form

    return (<Accordion
        summary={<div className={styles.accordion__summary}>
            <button className={styles.accordion__summary__delete} onClick={onDeleteButtonClick}>
                <XIcon width={30} height={30} color={'white'} />
            </button>
            <span className={styles.accordion__summary__comment}>{comment}</span>
    </div>}
    >
        {<dl className={styles.accordion__formDetails}>
            <dt className={styles.accordion__formDetails__dt}>Comment</dt>
            <dd className={styles.accordion__formDetails__dd}>{comment}</dd>
            <dt className={styles.accordion__formDetails__dt}>Full Name</dt>
            <dd className={styles.accordion__formDetails__dd}>{fullName}</dd>
            <dt className={styles.accordion__formDetails__dt}>Company Name</dt>
            <dd className={styles.accordion__formDetails__dd}>{companyName}</dd>
            <dt className={styles.accordion__formDetails__dt}>Email</dt>
            <dd className={styles.accordion__formDetails__dd}>{email}</dd>
            <dt className={styles.accordion__formDetails__dt}>Employee Number</dt>
            <dd className={styles.accordion__formDetails__dd}>{email}</dd>
            <dt className={styles.accordion__formDetails__dt}>Phone</dt>
            <dd className={styles.accordion__formDetails__dd}>{phone}</dd>
            <dt className={styles.accordion__formDetails__dt}>Services</dt>
            <dd className={styles.accordion__formDetails__dd}>
                {services.join(', ')}
            </dd>
            <dt className={styles.accordion__formDetails__dt}>Files</dt>
            <ul className={styles.accordion__formDetails__files}>
                {files.map((file, index) => <li key={index}><a
                    href={`/api/call-form/file?id=${id}&file=${file}`}
                >
                    {'File ' + (index + 1)}
                </a></li>)}
            </ul>
            {postedAt && (<>
                <dt className={styles.accordion__formDetails__dt}>Posted At</dt>
                <dd className={styles.accordion__formDetails__dd}>{dateToStringWithTime(new Date(postedAt))}</dd>
            </>)}
            <dt className={styles.accordion__formDetails__dt}>Status</dt>
            {statusComponent}
            <dt className={styles.accordion__formDetails__dt}>Admin comment</dt>
            {adminCommentComponent}
        </dl>}
    </Accordion>)
}