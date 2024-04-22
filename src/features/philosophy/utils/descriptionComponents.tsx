import type {ReactNode} from 'react'
import type {Topic} from '../types/Topic'
import AllInOnceDescription from '../ui/AllInOnceDescription'
import CompanyInSmartphoneDescription from '../ui/CompanyInSmartphoneDescription'
import PassionateDescription from '../ui/PassionateDescription'

const descriptionComponents = {
    allInOnce: <AllInOnceDescription />,
    companyInSmartphone: <CompanyInSmartphoneDescription />,
    passionate: <PassionateDescription />

} as const satisfies Record<Topic, ReactNode>

export default descriptionComponents