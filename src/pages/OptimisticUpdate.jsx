import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function OptimisticUpdate() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar dasar React Query" },
    { id: 2, text: "Mencoba fitur Optimistic Update" },
  ]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo) =>
      new Promise((resolve) => setTimeout(() => resolve(newTodo), 1000)),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(["todos"]);
      setTodos((prev) => [...prev, newTodo]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleAdd = () => {
    const newTodo = { id: Date.now(), text: "Tugas baru ditambahkan." };
    mutation.mutate(newTodo);
  };

  return (
    <section>
      <h2>⚡ Optimistic Update</h2>
      <p>
        Simulasi menambahkan data baru secara langsung tanpa menunggu server.
      </p>
      <div className="card">
        {todos.map((t) => (
          <p key={t.id}>• {t.text}</p>
        ))}
      </div>
      <button onClick={handleAdd} style={{ marginTop: "10px" }}>
        Tambah Tugas
      </button>
      {mutation.isLoading && <p>Menambahkan data...</p>}
    </section>
  );
}
