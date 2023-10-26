interface ProductProps {
  params: {
    id: string
  }
}

export default function Product(props: ProductProps) {
  return <h1>{JSON.stringify(props.params.id)}</h1>
}
