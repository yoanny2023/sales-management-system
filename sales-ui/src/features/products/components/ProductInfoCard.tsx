import ProductActions from "./PoductActions"
import StockBadge from "./StockBadge"

type ProductInfoCardProps = {
  price: number
  stock: number
  createdAt: string
}

function ProductInfoCard({price,stock,createdAt}:ProductInfoCardProps) {
  return (
    <div className="rounded-xl text-lg border border-zinc-800 bg-zinc-900 p-6">
        <div>Price: <span className="text-amber-500">${price}</span></div>
        <div>Stock: <span className="text-amber-500">{stock}</span></div>
        <div>
          Status: <StockBadge stock={stock}  />
        </div>
        <div>
          Created:  <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <ProductActions />
      </div>
  )
}

export default ProductInfoCard
