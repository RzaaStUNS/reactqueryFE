export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Gagal mengambil data pengguna");
  return res.json();
}
