"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useGlobalContext } from "@/context/GlobalContext";

interface IOrderCountProps {
  price: number;
}

const ProductQuantity = ({ price }: IOrderCountProps) => {
  const { quantityCumulative, setQuantityCumulative } = useGlobalContext();
  const [quantity, setQuantity] = useState(0);
  const stock = 10;
  const pricePerItem = Number(price);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const onHandleAddToChart = useCallback(()=>{
    setQuantityCumulative((prevCumulative) => prevCumulative + quantity);
  },[quantity])

  return (
    <div className={styles.productQuantity}>
      <div className={styles.quantityControl}>
        <button
          className={styles.btn}
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          −
        </button>
        <span className={styles.quantityValue}>{quantity}</span>
        <button
          className={styles.btn}
          onClick={handleIncrement}
          disabled={quantity === stock}
        >
          +
        </button>
        <span className={styles.stock}>
          Stok: <strong>{stock}</strong>
        </span>
      </div>
      <div className={styles.subtotal}>
        <label className="label-default">Subtotal</label>
        <label className="title">
          Rp{(quantity * pricePerItem).toLocaleString("id-ID")}
        </label>
      </div>
      <button className="btn-primary mt-5" onClick={onHandleAddToChart}>+ Add To Chart</button>
    </div>
  );
};

export default ProductQuantity;
