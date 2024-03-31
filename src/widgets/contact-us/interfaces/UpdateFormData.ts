import { Form } from '../interfaces/Form'

interface UpdateFormData extends Partial<Pick<Form, 'status'>>, Pick<Form, 'id'> {}

export type { UpdateFormData }