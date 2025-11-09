import FetchData from "./pages/FetchData";
import OptimisticUpdate from "./pages/OptimisticUpdate";
import ParallelQuery from "./pages/ParallelQuery";

export default function App() {
  return (
    <div className="container">
      <h1>🧠 Praktikum React Query</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Contoh implementasi dasar React Query: Fetch Data, Optimistic Update,
        dan Parallel Query
      </p>
      <FetchData />
      <hr />
      <OptimisticUpdate />
      <hr />
      <ParallelQuery />
    </div>
  );
}
