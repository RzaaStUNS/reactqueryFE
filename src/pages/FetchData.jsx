import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function FetchData() {
  const [fromCache, setFromCache] = useState(false);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
  });

  useEffect(() => {
    const cache = localStorage.getItem("REACT_QUERY_OFFLINE_CACHE");
    if (cache) setFromCache(true);
  }, []);

  return (
    <section>
      <h2>📦 Pengambilan Data (Fetch Data)</h2>
      <p>
        Menampilkan 5 data postingan dari API publik menggunakan React Query.
      </p>
      {fromCache && (
        <p style={{ color: "green" }}>✅ Data diambil dari cache lokal</p>
      )}
      {isLoading ? (
        <p>Sedang memuat data...</p>
      ) : (
        <div className="card">
          {data?.slice(0, 5).map((post) => (
            <p key={post.id}>• {post.title}</p>
          ))}
        </div>
      )}
      {isFetching && <p>Memperbarui data...</p>}
    </section>
  );
}
