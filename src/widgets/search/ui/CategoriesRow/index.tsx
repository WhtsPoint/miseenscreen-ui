import UnfilledCategoriesRow from '@/utils/ui/CategoriesRow'
import type { Category } from '../../types/Category'
import { useTranslations } from 'next-intl'
import searchCategories from '../../utils/categories'

interface Params {
    onSelect?: (category: Category) => unknown
}

export default function CategoriesRow({ onSelect }: Params) {
    const t = useTranslations('search.categories')

    const categories = Object.fromEntries(
        searchCategories.map((category) => [category, t(category)])
    ) as Record<Category, any>

    return (<UnfilledCategoriesRow categories={categories} onSelect={onSelect} />)
}