"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { getProductById } from "@/api/product";
import { use } from "react";
import Loader from "@/components/Loader";
import { ProductInterface } from "@/type/products";
import { convertToRupiah } from "@/utils/convert";
import OrderCount from "./components/OrderCount";

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const { id } = use(params);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchData();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className={styles.container}>
      <Image
        className="pointer mb-4"
        src="/assets/icon/back.svg"
        alt="Logo"
        width={34}
        height={34}
        onClick={() => router.back()}
      />
      <div className={styles["detail-product-container"]}>
        <div>
          <Image
            src={product?.image}
            alt={product?.title}
            width={300}
            height={300}
          />
        </div>
        <div>
          <label className="title mb-4">{product?.title}</label>
          <div>Price: Rp{convertToRupiah(product?.price)}</div>
          <div className={styles["card-rating"]}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={styles.star}>
                {i < product?.rating?.rate ? "★" : "☆"}
              </span>
            ))}
            <span className={styles["rating-value"]}>
              ({product?.rating?.rate}/5)
            </span>
          </div>
          <span className={styles.description}>{product?.description}</span>
        </div>
        <div className={styles["border-add-chart"]}>
          <OrderCount />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
