import type { Form } from '../interfaces/Form'

interface UpdateFormData extends Partial<Pick<Form, 'status' | 'adminComment'>>, Pick<Form, 'id'> {}

export type { UpdateFormData }