import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Logo do app</h1>
      <div>{children}</div>
      <footer>footer do app</footer>
    </div>
  )
}
