'use client'

import { useState } from 'react'
import { Thread } from './thread'

export function AddToCardButton() {
  const [count, setCount] = useState(0)

  function addToCard() {
    setCount((state) => state + 1)
  }

  return (
    <button onClick={addToCard}>
      Adicionar ao carrinho ({count})
      <Thread />
    </button>
  )
}
