import http from "../../http-common";
import type { ProductProps } from "../interfaces/Product";

const findAll = async (type: string) => {
  if (type) {
    const res = await http.get<ProductProps[]>("products/?_sort=price");
    return type === "desc" ? res.data.reverse() : res.data;
  }
  const response = await http.get<ProductProps[]>("products");
  return response.data;
};

const searchName = async (name: string) => {
  const response = await http.get<ProductProps[]>(`products?name=${name}`);
  return response.data;
};

export const ProductService = {
  findAll,
  searchName,
};

export default ProductService;
