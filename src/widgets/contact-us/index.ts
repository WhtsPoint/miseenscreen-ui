import Form from './ui/Form'
import CallFormAccordion from './ui/CallFormAccordion'
import ResultWindow from './ui/ResultWindow'
import StatusSwitcher from './ui/StatusSwitcher'
import AdminCommentField from './ui/AdminCommentField'
import ContactUsModal from './ui/ContacUsModal'
import type { Form as FormData } from './interfaces/Form'
import type { FormParams } from './interfaces/FormParams'
import type { Status } from './types/Status'
import type { UpdateFormData } from './interfaces/UpdateFormData'
import useContactUsModalAnimation from './hooks/useContacUsModalAnimation'

export { Form, ResultWindow, CallFormAccordion, StatusSwitcher, AdminCommentField, ContactUsModal, useContactUsModalAnimation }
export type { FormParams, FormData, Status, UpdateFormData }
