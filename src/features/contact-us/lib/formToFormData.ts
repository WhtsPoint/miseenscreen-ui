import type {FormParams} from '@/widgets/contact-us'

//TODO: Would be better to create universal function to serialize object to FormData
export default function formToFormData(params: FormParams & { token: string }): FormData {
    const formData = new FormData()
    const { files, services, ...other } = params
    const nonPrimitives = { files, services } as const

    for (const key in other) formData.append(key, other[key as keyof typeof other])
    for (const key in nonPrimitives) {
        nonPrimitives[key as keyof typeof nonPrimitives].map((item) => {
            formData.append(key + '[]', item)
        })
    }

    return formData
}