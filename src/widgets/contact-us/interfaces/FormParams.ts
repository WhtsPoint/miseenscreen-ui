import { Form } from './Form'

interface FormParams extends Omit<Form, 'id' | 'files' | 'postedAt' | 'status'> {
    files: File[]
}

export type { FormParams }