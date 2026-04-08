import type { ProductProps } from "../interfaces/Product";
import Input from "./Input";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/product.service";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { debounce } from "lodash";
import List from "./List";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useShoppingList } from "../contexts/ShoppingCart";

export default function Header() {
  const [productName, setProductName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const refDropdown = useRef<HTMLUListElement>(null);

  const { totalQtd } = useShoppingList();

  const {
    data: productsByName,
    error,
    isLoading,
  } = useQuery<ProductProps[], Error>({
    queryKey: ["query-products-by-name", productName],
    queryFn: async () => {
      return ProductService.searchName(productName);
    },
    enabled: productName.length > 0,
  });

  // ! Versão +5 precisa usar useEffec
  useEffect(() => {
    if (productsByName) {
      setIsOpen(productsByName.length > 0);
    } else {
      setIsOpen(false); // Fecha se os dados sumirem ou resetarem
    }
  }, [productsByName]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);

    setProductName(value);
  };

  useOnClickOutside(refDropdown, () => {
    setIsOpen(false);
  });

  const debounceHandleOnChange = debounce(handleInput, 500);

  return (
    <header className="flex fixed justify-center top-0 right-0 w-full bg-white py-3">
      <div className="mx-auto flex items-center justify-between w-11/12 gap-52">
        <div>
          <Link to="/" relative="path">
            <img src="#" alt="LOGO" className="max-w-36" />
          </Link>
        </div>
        <div className="w-4/5 relative">
          <Input onChange={debounceHandleOnChange} />
          {isOpen && (
            <ul
              ref={refDropdown}
              className="absolute z-50 mt-4 mas-h-60 w-full overflow-auto rounded-md bg-white p-4 shadow-lg"
            >
              {productsByName?.map((product: ProductProps) => {
                return (
                  <List className="items-center justify-between">
                    {product.name}
                    <div>
                      <img
                        src={`/assets/tree-icons/${product.image}.png`}
                        className="h-20 rounded-t-lg object-cover"
                      />
                      <span>$ {product.price}</span>
                    </div>
                  </List>
                );
              })}
            </ul>
          )}
        </div>
        <Link to="/shopping-cart" relative="path" className="flex">
          <CiShoppingCart className="h-9 w-20" />

          {totalQtd > 0 && (
            <div className="relative right-8 flex size-6 justify-center rounded-3xl bg-blue-400">
              <span>{totalQtd}</span>
            </div>
          )}
        </Link>
      </div>
    </header>
  );
}
