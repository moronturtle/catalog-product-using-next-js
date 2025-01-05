import Carousel from "@/components/Carousel";
import { imagesDummy } from "@/utils/constants";
import { Metadata } from "next";
import CardCategory from "./components/CardCategory";
import styles from './styles.module.scss';
import { getListCategories } from "@/api/category";
import ListProducts from "./components/ListProducts";

export const metadata: Metadata = {
  title: "Home",
  description: "This is the Home page.",
};

const HomePage = async () => {
  const categories = await getListCategories();

  return (
    <div className={styles.container}>
       <Carousel images={imagesDummy} />
       <CardCategory categories={categories} />
       <ListProducts />
    </div>
  );
};

export default HomePage;
