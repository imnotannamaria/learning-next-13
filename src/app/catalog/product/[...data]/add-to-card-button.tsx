'use client'

import { ReactNode, useState } from 'react'

export function AddToCardButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCard() {
    setCount((state) => state + 1)
  }

  return (
    <button onClick={addToCard}>
      Adicionar ao carrinho ({count}){children}
    </button>
  )
}
