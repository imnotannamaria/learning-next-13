export async function Thread() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <h1>Thread</h1>
}
