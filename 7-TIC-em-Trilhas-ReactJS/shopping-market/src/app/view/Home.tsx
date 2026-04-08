import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import Card from "../components/Card";
import { findAll } from "../services/product.service";
import type { ProductProps } from "../interfaces/Product";

export default function Home() {
  useEffect(() => {
    findAll().then((res) => console.log(res));
  }, []);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductProps[], Error>({
    queryKey: ["query-products"],
    queryFn: async () => {
      return await findAll();
    },
  });
  return (
    <div className="mt-32 h-4/5 w-full flex flex-col items-center justify-content gap-15">
      <div className="grid h-5/6 w-11/12 grid-cols-4 gap-4 overflow-x-auto">
        {products?.map((product: ProductProps) => {
          return <Card key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
}
