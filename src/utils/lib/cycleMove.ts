import { statuses } from '@/widgets/contact-us/utils/status'

export default function cycleMove<T>(array: readonly T[], value: T, step: number): T {
    const nextIndex = array.indexOf(value) + step
    const leftCheckedIndex = nextIndex < 0 ? statuses.length - 1 - step : nextIndex

    return array[nextIndex > statuses.length - 1 ? step - 1 : leftCheckedIndex]
}