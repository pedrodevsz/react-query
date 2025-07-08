type Book = {
  key: string
  title: string
  author_name?: string[]
  first_publish_year?: number
}

export async function fetchBooks(query: string): Promise<Book[]> {
  const res = await fetch(`/api/books?title=${encodeURIComponent(query)}`)
  const data = await res.json()
  return data.docs || []
}

