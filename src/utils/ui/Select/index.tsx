'use client'

import { useState } from 'react'

interface Params<> {
    options: [string, string][]
    initValue: string,
    onChange: (selected: string) => unknown
}

export default function Select({ options, initValue }: Params) {
    const [selected, setSelected] = useState<string>(initValue)

    return (<select>
        {options.map(([value, name]) => <option key={value} value={value}>
            {name}
        </option>)}
    </select>)
}