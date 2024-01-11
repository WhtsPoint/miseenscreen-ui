interface DirectionMethod {
    calcProgress: (current: number, speed: number) => number,
    initial: number
}

const up: DirectionMethod = {
    calcProgress: (current, speed) => {
        const next = current - speed
        return current < -100 ? 0 : next
    },
    initial: 0
}

const down: DirectionMethod = {
    calcProgress: (current, speed) => {
        const next = current + speed
        return (next > 0 ? -100 : next)
    },
    initial: -100
}

const methods = {
    'up': up,
    'down': down
} as const

type Direction = keyof typeof methods

export { methods }
export type { Direction }