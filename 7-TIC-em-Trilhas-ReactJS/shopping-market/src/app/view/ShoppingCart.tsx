import Button from "../components/Button";
import { useShoppingList } from "../contexts/ShoppingCart";

export default function ShoppingCart() {
  const { items, addProduct, onRemove, onDecrease, totalSumAmount } =
    useShoppingList();
  return (
    <div className="flex h-full flex-col gab-12">
      <div className="mt-32 flex h-4/5 justify-center overflow-x-auto">
        <div className="flex w-3/6 flex-col gap-8">
          {items?.map((item) => {
            return (
              <div
                className="flex justify-between rounded-3xl bg-white p-8"
                key={item.id}
              >
                <div className="flex flex-col gap-4">
                  <p>
                    <span>Quantidade: {item.quantity}</span>{" "}
                    <span>Valor Total: {item.amount.toFixed(2)}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <Button
                    onClick={() =>
                      addProduct(item.id, item.name, item.unityPrice)
                    }
                  >
                    +
                  </Button>

                  <Button onClick={() => onDecrease(item.id, item.unityPrice)}>
                    -
                  </Button>

                  <Button variant="secondary" onClick={() => onRemove(item.id)}>
                    Remover
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <span className="ml-16">
          <b>Total: </b> $ {totalSumAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
