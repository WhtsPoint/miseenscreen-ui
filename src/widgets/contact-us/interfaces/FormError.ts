import type { ObjectType } from '@/utils/types/ObjectType'

interface FormError {
    name: string,
    params?: ObjectType<string>
}

export type { FormError }