export async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Gagal mengambil data tugas");
  return res.json();
}
