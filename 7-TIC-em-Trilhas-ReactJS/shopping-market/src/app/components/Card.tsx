import { useShoppingList } from "../contexts/ShoppingCart";
import type { Product } from "../interfaces/Product";
import Button from "./Button";

export default function Card({ item }: Product) {
  const { addProduct } = useShoppingList();
  return (
    <div className="flex h-96 w-64 flex-col justify-center bg-white p-2 rounded-2xl ">
      <div className="flex justify-center">
        {/* Adicionar imagens */}
        <img
          src={`/assets/tree-icons/${item.image}.png`}
          alt={`Icon of the tree ${item.name}`}
          className="h-40 rounded-t-lg object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-center items-center mb-2">
          <span className="text-center capitalize font-bold">{item.name}</span>
        </div>

        <div className="flex justify-center items-center">
          <span>$ {item.price}</span>
        </div>

        <Button
          onClick={() => {
            addProduct(item.id, item.name, item.price);
          }}
        >
          Add no carrinho
        </Button>
      </div>
    </div>
  );
}
