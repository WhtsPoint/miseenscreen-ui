import { FormData } from '@/widgets/contact-us'
import getForms from '@/features/contact-us/action/getForms'

const getAndSetFormsWithPages = (
    count: number,
    setForms: (forms: FormData[]) => unknown,
    setPageCount: (pageCount: number) => unknown
) => async (page: number): Promise<void> => {
    const response = await getForms(count, page)

    if (!response) return

    const [pagination, error] = response

    if (error !== null) return alert(error)

    setForms(pagination.data)
    setPageCount(Math.max(1, pagination.pageCount))
}

export default getAndSetFormsWithPages