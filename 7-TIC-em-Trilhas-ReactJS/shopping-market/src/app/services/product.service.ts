import http from "../../http-common";
import type { ProductProps } from "../interfaces/Product";

export const findAll = async () => {
  const response = await http.get<ProductProps[]>("products");
  return response.data;
};

export const searchName = async (name: string) => {
  const response = await http.get<ProductProps[]>(`products?name=${name}`);
  return response.data;
};

export const ProductService = {
  findAll,
  searchName,
};

//export default ProductService;
