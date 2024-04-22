import type { Form } from './Form'

interface FormParams extends Omit<Form, 'id' | 'files' | 'postedAt' | 'status' | 'adminComment'> {
    files: File[]
}

export type { FormParams }