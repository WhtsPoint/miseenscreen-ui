import { FormParams } from '../../interfaces/FormParams'
import FileUpload from '../FileUpload'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import { useState } from 'react'
import PhoneInput from '@/utils/ui/PhoneInput'
import ServicesSelect from '@/widgets/contact-us/ui/ServicesSelect'
import useFormSend from '../../hooks/useFormSend'
import FormError from '@/widgets/contact-us/ui/FormError'
import useFormAdaptation from '@/widgets/contact-us/hooks/useFormAnimation'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import form from '@/utils/config/form'
import styles from './styles.module.scss'
import buttonStyles from '../../assets/styles/button.module.scss'

interface Params {
    onSend: (formData: FormParams) => unknown,
    className?: string
}

export default function Form({ onSend, className }: Params) {
    const t = useTranslations('contact-us.form')
    const [files, setFiles] = useState<File[]>([])
    const [services, setServices] = useState<string[]>([])
    const [onFormSend, getError] = useFormSend({ services, files, validation: { files: form.file } })

    const ref = useFormAdaptation()

    return (<form ref={ref} onSubmit={onFormSend} className={cl(styles.form, className)}>
        <FormError error={getError('problem')}>
            <textarea maxLength={3000} style={IBMPlexSans.style} name={'problem'} placeholder={t('problem')} />
        </FormError>
        <FileUpload onFilesChange={setFiles} error={getError('file-size')} />
        <div className={styles.form__other}>
            <FormError error={getError('name')}>
                <input maxLength={100} type={'text'} name={'name'} placeholder={t('name')} />
            </FormError>
            <FormError error={getError('company')}>
                <input maxLength={100} name={'company'} placeholder={t('company')} />
            </FormError>
            <FormError error={getError('email')}>
                <input maxLength={100} name={'email'} placeholder={t('email')} />
            </FormError>
            <FormError error={getError('employees-amount')}>
                <input maxLength={100} name={'employeesAmount'} placeholder={t('employees-amount')} />
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
            <FormError error={getError('services')}>
                <ServicesSelect
                    value={services[0]}
                    onChange={(s) => setServices([s])}
                    className={styles.form__services}
                    optionClass={styles.form__services__optionList}
                />
            </FormError>
        </div>
        <button className={buttonStyles.button} type={'submit'}>{t('submit')}</button>
    </form>)
}