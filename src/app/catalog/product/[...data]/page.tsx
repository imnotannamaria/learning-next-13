import { AddToCardButton } from './add-to-card-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  // http://localhost:3000/catalog/product/40028922/small/purple
  // Product ID: 40028922
  // Size: small
  // Color: purple

  return (
    <div>
      <p>Product ID: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCardButton />
    </div>
  )
}
