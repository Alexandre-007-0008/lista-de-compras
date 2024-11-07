import Link from "next/link"

const PRODUCTS = [
  {
    name: 'LED', slug: 'led'
  },
  {
    name: 'Resistor', slug: 'resistor',
  }
]

export default function Dashboard() {
  return (
    <>
      <h1>Products</h1>

      <hr />

      <ul>
        {
          PRODUCTS.map((products, index) => {
            return (
              <li key={index}>
                <Link href={`/products/${products.slug}`}>{products.name}</Link>
              </li>
            )
          })
        }

      </ul>
    </>
  )
}