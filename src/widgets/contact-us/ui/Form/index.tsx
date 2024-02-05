import { FormParams } from '../../interfaces/FormParams'
import FileUpload from '../FileUpload'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'
import form from '@/utils/config/form'
import { useState } from 'react'
import useFilesError from '@/widgets/contact-us/hooks/useFilesError'
import styles from './styles.module.scss'
import buttonStyles from '../../assets/styles/button.module.scss'
import Select from '@/utils/ui/Select'
import PhoneInput from '@/utils/ui/PhoneInput'
import ReCaptcha from '@/features/re-captcha/ui/ReCaptcha'

interface Params {
    onSend: (formData: FormParams) => unknown,
    className?: string
}

export default function Form({ onSend, className }: Params) {
    const t = useTranslations('contact-us.form')
    const [files, setFiles] = useState<File[]>([])
    const filesError = useFilesError(files, form.file.maxCount, form.file.maxSize)
    const [service, setService] = useState<string>()

    return (<form className={cl(styles.form, className)}>
        <textarea maxLength={3000} style={IBMPlexSans.style} name={'problem'} placeholder={t('problem')} />
        <FileUpload onFilesChange={setFiles} error={filesError} {...form.file} />
        <div className={styles.form__other}>
            <input maxLength={100} name={'name'} placeholder={t('name')} />
            <input maxLength={100} name={'company'} placeholder={t('company')} />
            <input maxLength={100} name={'email'} placeholder={t('email')} />
            <input maxLength={100} name={'employeesAmount'} placeholder={t('employees-amount')}  />
            <PhoneInput maxLength={100} className={styles.form__phone} defaultValue={'+1'} placeholder={t('phone')} />
            <Select
                optionClass={styles.form__services__optionList}
                className={styles.form__services}
                options={{ 'a': 'a', 'b': 'b', 'c': 'c'}}
                value={service}
                placeholder={t('services')}
                onChange={setService}
            />
        </div>
        <ReCaptcha />
        <button className={buttonStyles.button} type={'submit'}>{t('submit')}</button>
    </form>)
}