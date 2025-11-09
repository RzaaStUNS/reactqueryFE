export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Gagal mengambil data postingan");
  return res.json();
}
