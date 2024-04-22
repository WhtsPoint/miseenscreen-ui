export default function removeBlogContentTags(content: string) {
    return content.replace(/<[^>]*>/g, '')
}