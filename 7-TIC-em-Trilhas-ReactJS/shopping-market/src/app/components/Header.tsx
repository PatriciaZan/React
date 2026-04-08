import type { ProductProps } from "../interfaces/Product";
import Input from "./Input";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";
import { useState, type ChangeEvent } from "react";

export default function Header() {
  const [productName, setProductName] = useState("");

  const {
    data: productsByName,
    error,
    isLoading,
  } = useQuery<ProductProps[], Error>({
    queryKey: ["query-products-by-name"],
    queryFn: async () => {
      return await ProductService.searchName(productName);
    },
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductName(value);
  };

  return (
    <header className="flex fixed justify-center top-0 right-0 w-full bg-white py-3">
      <div className="mx-auto flex items-center justify-between w-11/12 gap-52">
        <div>
          <a href="/">
            <img src="#" alt="LOGO" className="max-w-36" />
          </a>
        </div>
        <div className="w-4/5">
          <Input onChange={(e) => handleInput(e)} />
          <ul>
            {productsByName?.map((product: ProductProps) => {
              return <li>{product.name}</li>;
            })}
          </ul>
        </div>
        <div>carrinho</div>
      </div>
    </header>
  );
}
