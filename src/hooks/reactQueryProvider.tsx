'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '@/services/books/fetchBooks'

export function useBooksQuery(query: string) {
  return useQuery({
    queryKey: ['books', query],
    queryFn: () => fetchBooks(query),
    enabled: query.length > 0,
  })
}
