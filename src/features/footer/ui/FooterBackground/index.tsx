import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import videos from '@/utils/config/videos'

interface Params {
    className?: string,
}

export default function FooterBackground({ className }: Params) {
    return <BackgroundVideo
        src={videos.footer}
        className={className}
    />
}