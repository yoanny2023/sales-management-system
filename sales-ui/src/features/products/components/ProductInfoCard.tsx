import { formatDate } from "@/utils/formatDate"
import ProductActions from "./PoductActions"
import StockBadge from "./StockBadge"

type ProductInfoCardProps = {
  id: string
  price: number
  stock: number
  createdAt: string
}

function ProductInfoCard({id,price,stock,createdAt}:ProductInfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-zinc-100">
          Product Information
        </h3>

        <p className="text-sm text-zinc-500">
          Details about this product
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <span className="text-zinc-400">
            Price
          </span>

          <span className="font-medium text-amber-400">
            ${price}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <span className="text-zinc-400">
            Stock
          </span>

          <span className="font-medium text-zinc-100">
            {stock}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <span className="text-zinc-400">
            Status
          </span>

          <StockBadge stock={stock} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Created
          </span>

          <span className="text-zinc-300">
            {formatDate(createdAt)}
          </span>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-5">
        <ProductActions
        id={id}
        />
      </div>
    </div>
  )
}

export default ProductInfoCard
