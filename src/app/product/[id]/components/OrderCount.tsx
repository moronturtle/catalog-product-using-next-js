import ProductQuantity from "@/components/ProductQuantity"

interface IOrderCountProps {
    price: number
}

const OrderCount = ({price}: IOrderCountProps) => {
  return (
    <>
        <label className={`title mb-4}`}>Atur Jumlah Pesanan</label>
        <label className={`label-default mb-4}`}>Default , No Bubble</label>
        <hr className="custom-hr" />
        <ProductQuantity price={price} />
    </>
  )
}

export default OrderCount