import ProductQuantity from "@/components/ProductQuantity"

interface IOrderCountProps {
    price: string
}

const OrderCount = ({price}: IOrderCountProps) => {
  return (
    <>
        <label className={`title mb-4}`}>Atur Jumlah Pesanan</label>
        <label className={`label-default mb-4}`}>Default , No Bubble</label>
        <hr className="custom-hr" />
        <ProductQuantity price={price} />
        <button className="btn-primary mt-5">+ Add To Chart</button>
    </>
  )
}

export default OrderCount