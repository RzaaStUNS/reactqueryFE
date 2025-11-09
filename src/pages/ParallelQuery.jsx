import { useQuery } from "@tanstack/react-query";

export default function ParallelQuery() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    },
  });

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      return res.json();
    },
  });

  return (
    <section>
      <h2>🔁 Parallel Query</h2>
      <p>
        Contoh dua query berjalan bersamaan untuk memuat data pengguna dan
        daftar tugas.
      </p>

      <div className="card">
        <h3>👤 Data Pengguna</h3>
        <ul>
          {users?.slice(0, 3).map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>📝 Data Tugas</h3>
        <ul>
          {todos?.slice(0, 3).map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
