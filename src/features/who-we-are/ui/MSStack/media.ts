import type { Media } from '@/widgets/cases-points'
import image1 from '@/utils/assets/images/who-we-are/stack/web/1.jpg'
import image2 from '@/utils/assets/images/who-we-are/stack/web/2.jpg'
import image3 from '@/utils/assets/images/who-we-are/stack/web/3.jpg'
import image4 from '@/utils/assets/images/who-we-are/stack/web/4.jpg'
import videos from '@/utils/config/videos'

const media: Media[] = [
    { type: 'video', src: videos.whoWeAre.web[0], format: 'video/mp4' },
    image1,
    image2,
    image3,
    image4,
    { type: 'video', src: videos.whoWeAre.web[1], format: 'video/mp4' }
]

export default media