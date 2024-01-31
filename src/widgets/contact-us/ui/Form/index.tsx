import { FormParams } from '../../interfaces/FormParams'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { useTranslations } from 'next-intl'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'

interface Params {
    onSend: (formData: FormParams) => unknown,
    className?: string
}

export default function Form({ onSend, className }: Params) {
    const t = useTranslations('contact-us.form')

    return (<form className={cl(styles.form, className)} onSubmit={console.log}>
        <textarea style={IBMPlexSans.style} name={'problem'} placeholder={t('problem')} />
        <div className={styles.form__other}>
            <input name={'name'} placeholder={t('name')} />
            <input name={'company'} placeholder={t('company')} />
            <input name={'email'} placeholder={t('email')} />
            <input name={'employeesAmount'} placeholder={t('employees-amount')}  />
            <input name={'phone'} placeholder={t('phone')} />
            <input name={'services'} placeholder={t('services')} />
        </div>
        <button type={'submit'}>{t('submit')}</button>
    </form>)
}