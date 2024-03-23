import config from '@/utils/config'
import { NotFoundPage } from '@/layers/404'
import IBMPlexSans from '@/utils/assets/fonts/IBMPlexSans'

export default function NotFound() {
    return (<html lang={config.locale.defaultLocale}>
        <body style={IBMPlexSans.style}>
            <NotFoundPage />
        </body>
    </html>)
}