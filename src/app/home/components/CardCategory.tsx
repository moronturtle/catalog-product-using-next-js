import { getListCategory } from "@/api/category";
import React from "react";

const CardCategory = async () => {
  const category = await getListCategory();
  console.log("category", category);

  return <div>CardCategory</div>;
};

export default CardCategory;
