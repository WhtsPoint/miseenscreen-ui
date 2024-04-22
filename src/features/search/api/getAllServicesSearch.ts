'use server'

import type { Service } from '@/widgets/search'
import { getTranslations } from 'next-intl/server'
import searchCoincidenceInCategory from '../lib/searchCoincidenceInCategory'
import type { NotSearchedService } from '../types/NotSearchedService'

export default async function getAllServicesSearch(locale: string, line: string): Promise<Service[]> {
    const t = await getTranslations({ locale, namespace: 'search.results' })

    return searchCoincidenceInCategory(
        Object.values(t.raw('services')) as NotSearchedService[],
        line
    )
}