import { FormParams } from '../../interfaces/FormParams'
import FileUpload from '../FileUpload'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import PhoneInput from '@/utils/ui/PhoneInput'
import ServicesSelect from '@/widgets/contact-us/ui/ServicesSelect'
import useFormSend from '../../hooks/useFormSend'
import FormError from '@/widgets/contact-us/ui/FormError'
import useFormAdaptation from '@/widgets/contact-us/hooks/useFormAnimation'
import { cl } from '@/utils/lib/cl'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import form from '@/utils/config/form'
import { motion } from 'framer-motion'
import { Option } from '../../types/Option'
import useMultipleValues from '@/utils/hooks/useMultipleValues'
import styles from './styles.module.scss'
import buttonStyles from '../../assets/styles/button.module.scss'
import BasicLoading from '../../../../utils/ui/BasicLoading'

interface Params {
    onSend: (formData: FormParams) => unknown,
    className?: string,
    isLoading: boolean
}

export default function Form({ onSend, className, isLoading }: Params) {
    const t = useTranslations('contact-us.form')
    const [files, setFiles] = useState<File[]>([])
    const [services, onServiceChange] = useMultipleValues<Option>([])
    const [onFormSend, getError] = useFormSend({ services, files, onSend, validation: { files: form.file }, isLoading })
    const [lockedSubmit, setLockedSubmit] = useState<boolean>(true)
    const animRef = useFormAdaptation()

    const fileError = getError('file-size') || getError('file-count') || getError('file-format')

    //BUG: Before next hydrate js, form event is not handled
    useEffect(() => setLockedSubmit(false), [lockedSubmit])

    return (<motion.form ref={animRef} onSubmit={onFormSend} className={cl(styles.form, className)}>
        <FormError error={getError('problem')}>
            <textarea maxLength={3000} style={IBMPlexSans.style} name={'comment'} placeholder={t('problem')} />
        </FormError>
        <FileUpload onFilesChange={setFiles} error={fileError} />
        <div className={styles.form__other}>
            <FormError error={getError('name')}>
                <input maxLength={100} type={'text'} name={'fullName'} placeholder={t('name')} />
            </FormError>
            <FormError error={getError('company')}>
                <input maxLength={100} name={'companyName'} placeholder={t('company')} />
            </FormError>
            <FormError error={getError('email')}>
                <input maxLength={100} name={'email'} placeholder={t('email')} />
            </FormError>
            <FormError error={getError('services')}>
                <ServicesSelect
                    values={services}
                    onChange={onServiceChange}
                    className={styles.form__services}
                    optionClass={styles.form__services__optionList}
                />
            </FormError>
            <FormError error={getError('employees-amount')}>
                <input maxLength={100} name={'employeeNumber'} placeholder={t('employees-amount')} />
            </FormError>
            <FormError error={getError('phone')}>
                <PhoneInput
                    name={'phone'}
                    maxLength={100}
                    className={styles.form__phone}
                    defaultValue={'+1'}
                    placeholder={t('phone')}
                />
            </FormError>
        </div>
        <button
            style={{ pointerEvents: lockedSubmit ? 'none' : 'auto'}}
            className={cl(styles.form__send, buttonStyles.button)}
            type={'submit'}
        >
            { isLoading ? <BasicLoading radius={10} /> : t('submit')}
        </button>
    </motion.form>)
}