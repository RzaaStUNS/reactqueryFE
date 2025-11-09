export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Gagal fetch data");
  }
  return res.json();
};
