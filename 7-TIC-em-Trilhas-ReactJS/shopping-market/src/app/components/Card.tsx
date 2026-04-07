import Button from "./Button";

export default function Card() {
  return (
    <div className="bg-white p-2 w-60 rounded-2xl ">
      <div>
        {/* Adicionar imagens */}
        <img src="https://placehold.co/500x400/png" alt="" />
      </div>

      <div className="p-4">
        <div className="flex justify-center items-center mb-2">
          <h3>Name Product</h3>
        </div>

        <div className="flex justify-center items-center">
          <span>Valor produto</span>
        </div>

        <Button>Add no carrinho</Button>
      </div>
    </div>
  );
}
