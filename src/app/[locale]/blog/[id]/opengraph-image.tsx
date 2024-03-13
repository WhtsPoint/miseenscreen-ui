import { ImageResponse } from 'next/og'
import { getBlogById, getBlogCoverById } from '@/features/blog'
import { readFile } from 'fs/promises'

export const alt = 'Blog cover'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Params {
    params: {
        locale: string,
        id: string
    }
}

export default async function OGImage({ params: { locale, id } }: Params) {
    const { title } = await getBlogById(locale, id)
    const coverLink = await getBlogCoverById(locale, id)

    return new ImageResponse(<div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
    }}>
        <picture style={{ position: 'absolute' }}>
            <img style={{ width: '100%' }} src={coverLink} alt={''} />
        </picture>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '400px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black' }}>
                <h1 style={{ fontSize: '50px', color: 'white' }}>MISEENCREEN</h1>
            </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black' }}>
            <h2 style={{ fontSize: '25px', color: 'white', textAlign: 'center' }}>{title}</h2>
        </div>
    </div>, { fonts: [{ name: 'openSans', data: await readFile('./src/utils/assets/fonts/open-sans.ttf') }] })
}