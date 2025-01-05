"use client";
import Image from "next/image";
import styles from "../styles.module.scss";
import { CategoryImage } from "@/utils/constants";

interface ICategoryProps {
  categories: string[];
}

const CardCategory = ({ categories }: ICategoryProps) => {
  const handleCardClick = (category: string) => {
    console.log(category);
  };

  return (
    <div className="mt-3">
      <label className="label mb-4">Available Category</label>
      <div className={styles.cardContainer}>
        {categories.map((category) => (
          <div
            key={category}
            className={styles.card}
            onClick={() => handleCardClick(category)}
          >
            <span>{category}</span>
            <Image
              src={CategoryImage[category as keyof typeof CategoryImage]}
              alt="Logo"
              width={64}
              height={64}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCategory;
