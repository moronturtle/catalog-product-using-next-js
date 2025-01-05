"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { convertToRupiah } from "@/utils/convert";

interface IProductProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  price: number;
}

const ProductCard = ({ id, image, title, rating, price }: IProductProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        className={styles["card-image"]}
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
      <div className={styles["card-title"]}>{title}</div>
      <div className={styles["card-price"]}>
        <span>Rp{convertToRupiah(price)}</span>
      </div>
      <div className={styles["card-rating"]}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={styles.star}>
            {i < rating ? "★" : "☆"}
          </span>
        ))}
        <span className={styles["rating-value"]}>({rating}/5)</span>
      </div>
    </div>
  );
};

export default ProductCard;
