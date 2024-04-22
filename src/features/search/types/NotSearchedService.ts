import type { Service } from '@/widgets/search'

type NotSearchedService = Omit<Service, 'title' | 'description'> & { title: string, description: string }

export type { NotSearchedService }