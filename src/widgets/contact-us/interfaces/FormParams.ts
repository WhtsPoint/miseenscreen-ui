import { Form } from './Form'

interface FormParams extends Omit<Form, 'id' | 'files'> {
    files: File[]
}

export type { FormParams }