import { IBM_Plex_Sans } from 'next/font/google'

const IBMPlexSans = IBM_Plex_Sans({
    style: ['normal'],
    weight: ['200', '500'],
    subsets: ['latin'],
    variable: '--font-plex-sans'
})

export default IBMPlexSans