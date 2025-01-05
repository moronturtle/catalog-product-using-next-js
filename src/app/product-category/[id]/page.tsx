"use client";
import React, { use, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductInterface } from "@/type/products";
import Loader from "@/components/Loader";
import { getProductByCategory } from "@/api/product";
import styles from "./styles.module.scss";
import ProductCard from "@/components/ProductCard";

const ProductCategoryPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const [product, setProduct] = useState<ProductInterface[] | null>(null);
  const { id } = use(params);
  const router = useRouter();

  const textCategory = useMemo(() => {
    const normalizedId = decodeURIComponent(id);
    return normalizedId;
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductByCategory(id);
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
      <label className={`label-default mb-4}`}>
        Menampilkan <b>{product?.length || 0}</b> Produk dari &apos;
        {textCategory}&apos;
      </label>
      <div className={styles["card-container"]}>
        {product?.map((item: ProductInterface) => {
          return (
            <ProductCard
              key={item?.id}
              id={String(item?.id)}
              image={item?.image}
              title={item?.title}
              price={item?.price || 0}
              rating={item?.rating?.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
