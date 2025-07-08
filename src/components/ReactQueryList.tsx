'use client'

import { useState } from 'react'
import { useBooksQuery } from '@/hooks/reactQueryProvider'

export function ReactQueryList() {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')

  const { data: books = [], isFetching } = useBooksQuery(query)

  const handleSearch = () => {
    setQuery(input)
  }

  return (
    <main>
      <div className="p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite o título do livro"
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Buscar
        </button>

        {isFetching && <p className="mt-4">Carregando...</p>}

        <ul className="mt-4 space-y-2">
          {books.map((book) => (
            <li key={book.key} className="border p-2 rounded">
              <strong>{book.title}</strong>
              {book.author_name && <p>Autor: {book.author_name.join(', ')}</p>}
              {book.first_publish_year && <p>Ano: {book.first_publish_year}</p>}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
