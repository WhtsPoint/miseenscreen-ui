import { useEffect, useId, useRef } from 'react'

interface Params {
    onComplete?: (token: string) => unknown
}

type ExtendedWindow = {
    [key in string]?: (token: string) => unknown
} & { grecaptcha: { render: (target: HTMLElement) => void } }

export default function ReCaptcha({ onComplete }: Params) {
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()
    const callbackName = 'reCaptcha_onComplete_' + id

    useEffect(() => {
        const extendedWindow = window as unknown as ExtendedWindow
        if (!ref.current) return
        //BUG: There is problem with react strict mode, when component renders twice and trigger recaptcha exception.
        try { extendedWindow.grecaptcha.render(ref.current) } catch {}
    }, [])

    useEffect(() => {
        const extendedWindow = window as unknown as ExtendedWindow
        extendedWindow[callbackName] = onComplete

        return () => { delete (window as any)[callbackName] }
    }, [id, callbackName, onComplete])

    return (<>
        <div
            id={id}
            data-sitekey={'6LdA-mApAAAAAFv1ICSpiiWoac7PZzzKKWquboox'}
            data-callback={callbackName}
            ref={ref}
        />
    </>)
}