import type { SearchCoincidence } from '@/widgets/search'

export default function searchCoincidenceInText(
    text: string, line: string, minContentLength: number = 250
): SearchCoincidence {
    const formattedLine = line.toLowerCase()
    const indexOfSearch = text.toLowerCase().indexOf(formattedLine)
    const oneSideLength = Math.max(0, Math.floor((minContentLength - line.length) / 2))

    if (indexOfSearch !== -1) {
        let leftIndex = Math.max(0, indexOfSearch - oneSideLength)
        let slicedText = text.slice(
            leftIndex,
            line.length + 2 * oneSideLength + leftIndex
        )
        let formattedText = slicedText.toLowerCase()

        return {
            text: slicedText,
            coincidence: {
                start: formattedText.indexOf(formattedLine),
                end: formattedText.indexOf(formattedLine) + formattedLine.length
            }
        }
    }

    return { text }
}