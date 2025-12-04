export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Statr adding some items to your packing list</em>
      </p>
    );

  const numberItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const numberPercent = Math.round((numberPacked / numberItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numberPercent === 100
          ? "Tou got everything! Ready to go"
          : `👜 You have ${numberItems} items in our list, and you already packed ${numberPacked} (${numberPercent}%)`}
      </em>
    </footer>
  );
}
