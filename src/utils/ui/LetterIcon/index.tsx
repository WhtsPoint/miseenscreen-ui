interface Params {
    width?: number,
    height?: number
}

export default function LetterIcon({ width = 50, height = 50 }: Params) {
    return (<svg width={width} height={height} fill={'white'} viewBox='0 0 512 512'>
        <g><g><path d='M0,86.337v339.325h512V86.337H0z M451.47,116.755l-195.47,147.834L60.53,116.755H451.47z M30.417,132.116L194.218,256
        L30.417,379.884V132.116z M60.53,395.245l158.9-120.177l36.57,27.657l36.57-27.657L451.47,395.245H60.53z M481.582,379.884
        L317.781,256l163.801-123.883V379.884z'/></g></g>
    </svg>)
}