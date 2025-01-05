"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface IOrderCountProps {
    price: string
}

const ProductQuantity = ({price}: IOrderCountProps) => {
  const [quantity, setQuantity] = useState(1);
  const stock = 10;
  const pricePerItem = Number(price);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

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
        <label className="title">Rp{(quantity * pricePerItem).toLocaleString("id-ID")}</label>
      </div>
    </div>
  );
};

export default ProductQuantity;
