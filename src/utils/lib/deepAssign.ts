import { ObjectType } from '@/utils/types/ObjectType'

export default function deepAssign(...targets: ObjectType<string>[]) {
    const assigned = targets.reduce((prev, current) => ({ ...prev, ...current}), {})

    for (const key in assigned) {
        if (typeof assigned[key] === 'object') {
            const valuesFromTargets = targets.map((target) => {
                return typeof target[key] === 'object' ? target[key] : {}
            })
            assigned[key] = deepAssign(...valuesFromTargets)
        }
    }

    return assigned
}