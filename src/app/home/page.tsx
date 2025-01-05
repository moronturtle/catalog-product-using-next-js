import Carousel from "@/components/Carousel";
import { imagesDummy } from "@/utils/constants";
import { Metadata } from "next";
import CardCategory from "./components/CardCategory";
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: "Home",
  description: "This is the Home page.",
};

const HomePage = () => {
  return (
    <div className={styles.container}>
       <Carousel images={imagesDummy} />
       <CardCategory />
    </div>
  );
};

export default HomePage;
