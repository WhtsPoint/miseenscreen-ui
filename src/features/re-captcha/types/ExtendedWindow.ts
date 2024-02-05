type ExtendedWindow = {
    [key in string]?: (token: string) => unknown
} & {
    grecaptcha: {
        render: (target: HTMLElement) => void,
        ready: (callback: () => unknown) => void
    }
}

export type { ExtendedWindow }