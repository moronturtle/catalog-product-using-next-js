import { getListAllProduct } from "@/api/product";
import ProductCard from "@/components/ProductCard";
import styles from "../styles.module.scss";
import { ProductInterface } from "@/type/products";

const ListProducts = async () => {
  const dataProduct = await getListAllProduct();

  return (
    <div>
      <label className="label mb-4">All Product Available</label>
      <div className={styles.cardContainerProduct}>
        {dataProduct?.map((item: ProductInterface) => {
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

export default ListProducts;
