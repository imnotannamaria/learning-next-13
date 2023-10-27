'use client'

import { useState } from 'react'

export function AddToCardButton() {
  const [count, setCount] = useState(0)

  function addToCard() {
    setCount((state) => state + 1)
  }

  return <button onClick={addToCard}>Adicionar ao carrinho ({count})</button>
}
