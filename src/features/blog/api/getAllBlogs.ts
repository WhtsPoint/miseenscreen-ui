import { Blog } from '@/widgets/blog/interfaces/Blog'
import cover from '@/utils/assets/images/blog/what/preview.jpg'

export default function getAllBlogs(): Blog[] {
    return [{
        title: 'A',
        id: 'a',
        previewCover: cover
    }]
}