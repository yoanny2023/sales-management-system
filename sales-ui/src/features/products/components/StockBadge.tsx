type StockBadgeProps = {
  stock:number
}

function StockBadge({stock}:StockBadgeProps) {

  let productStatus;
  
  if(stock === 0){
    productStatus = "Out of stock"
  }else if(stock <=3){
    productStatus = "Low stock"
  }else{
    productStatus = "In stock"
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        productStatus === "Out of stock"
          ? "bg-red-500/10 text-red-400"
          : productStatus === "Low stock"
          ? "bg-amber-500/10 text-amber-400"
          : "bg-emerald-500/10 text-emerald-400"
      }`}
      >
        {productStatus}
      </span>
  )
}

export default StockBadge
