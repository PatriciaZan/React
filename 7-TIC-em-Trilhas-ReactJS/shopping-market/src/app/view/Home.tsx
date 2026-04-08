import { useQuery } from "@tanstack/react-query";

import Card from "../components/Card";
import ProductService from "../services/product.service";
import type { ProductProps } from "../interfaces/Product";
import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const menuListVariants = tv({
  variants: {
    variant: {
      menuList: "absolute z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg",
    },
  },
});

export default function Home() {
  const [typeFilter, setTypeFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const listOptionsFilter = [
    {
      value: "desc",
      name: "Maior preço",
      class: "flex justify-center w-full",
    },
    {
      value: "asc",
      name: "Menor preço",
      class: "flex justify-center w-full",
    },
  ];

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductProps[], Error>({
    queryKey: ["query-products", typeFilter],
    queryFn: async () => {
      return await ProductService.findAll(typeFilter);
    },
  });

  const handlerFilter = (value: string) => {
    setTypeFilter(value);
  };

  const menuListClass = twMerge(
    menuListVariants(),
    isOpen
      ? "flex items-center flex-col absolute top-60 bg-white rounded-md p-4 shadow-lg shadow-black w-44"
      : "hidden",
  );

  const handlerFilterBtn = () => {
    setIsOpen(!isOpen);
  };

  //

  return (
    <div className="mt-32 flex h-4/5 w-full  flex-col items-center justify-content gap-15">
      <div className="w-4/5 flex flex-col items-end ">
        <Button className="w-24" onClick={() => handlerFilterBtn()}>
          Filtro
        </Button>
        <ul className={menuListClass}>
          {listOptionsFilter.map((item) => {
            return (
              <List
                key={item.name}
                className={item.class}
                onClick={(e) => {
                  e.stopPropagation();
                  handlerFilter(item.value);
                }}
              >
                {item.name}
              </List>
            );
          })}
        </ul>
      </div>
      <div className="grid h-5/6 w-11/12 grid-cols-4 gap-4 overflow-x-auto">
        {products?.map((product: ProductProps) => {
          return <Card key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
}
