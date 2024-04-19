import type { SearchCoincidence } from '@/utils/types/SearchCoincidence'

export default function searchCoincidenceInText(
    text: string, line: string, leftSideLength: number = 50
): SearchCoincidence {
    const indexOfSearch = text.toLowerCase().indexOf(line.toLowerCase())

    if (indexOfSearch !== -1) {
        let leftIndex = Math.max(0, indexOfSearch - leftSideLength)
        let slicedText = text.slice(leftIndex)

        return {
            text: slicedText,
            start: slicedText.indexOf(line),
            end: slicedText.indexOf(line) + line.length
        }
    }

    return { text }
}