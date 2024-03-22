import { NextRequest, NextResponse } from 'next/server'
import { getAccessToken } from '@/features/admin'
import config from '@/utils/config'

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams
    const id = params.get('id')
    const file = params.get('file')
    const token = await getAccessToken()

    if (!id || !file) return NextResponse.json({ error: 'Invalid params' }, { status: 422 })

    const response = await fetch(
        `${config.api}admin/call-form/${id}/${file}`,
        {
            headers: token ? { 'Authorization': 'Bearer ' + token } : {}
        }
    )

    if (!response.ok) {
        const body = await response.json()
        return NextResponse.json(body, { status: response.status })
    }

    return new NextResponse(response.body)
}