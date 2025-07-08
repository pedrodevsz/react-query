import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')

  if (!title) {
    return NextResponse.json({ error: 'Missing "title" query param' }, { status: 400 })
  }

  const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&limit=10`

  try {
    const res = await fetch(apiUrl)
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch from Open Library' }, { status: 500 })
  }
}
