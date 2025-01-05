'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.scss';
import { getProductById } from '@/api/product';
import { use } from 'react';
import Loader from '@/components/Loader';

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<any>(null);
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
      <div onClick={() => router.back()}>
      <Image
          className="pointer"
          src="/assets/icon/back.svg"
          alt="Logo"
          width={34}
          height={34}
        />
      </div>
     
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
      <p>{product.description}</p>
      <div>Price: Rp{product.price.toLocaleString()}</div>
      <div>Rating: {product.rating.rate} / 5</div>
    </div>
  );
};

export default ProductDetail;
