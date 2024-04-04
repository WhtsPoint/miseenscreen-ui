import AbstractSelect from '../AbstractSelect'
import styles from './styles.module.scss'
import codesToFlags from '@/utils/config/country-icons'
import { PhoneCode } from '@/utils/types/PhoneCode'

interface Params {
    code?: PhoneCode,
    onChange: (code: PhoneCode) => unknown
}

export default function PhoneCodeSelect({ code, onChange }: Params) {
    return (<AbstractSelect<PhoneCode>
        options={codesToFlags}
        value={code}
        onChange={onChange}
        className={styles.select}
        optionClass={styles.option}
        optionListClass={styles.optionList}
        valueClass={styles.value}
        valueMap={() => code ? codesToFlags[code] : '🏴'}
        optionMap={(value) => `+${value} ${codesToFlags[value]}` }
    />)
}