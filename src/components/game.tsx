import Link from "next/link";
import { useEffect, useState } from "react";
import Form from "./form";
import { Loading } from "./loading";
import { GameResponse } from "@/types";

export function Game() {
  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<GameResponse | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = (url: string) => {
      const promise = fetch(url).then((res) => res.json());

      if (!promise || !promise.then) {
        throw new Error("Error");
      }
      setStatus("pending");

      return promise.then(
        (data) => {
          setData(data);
          setStatus("success");
          return data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );
    };

    fetchData(
      `${process.env.NEXT_PUBLIC_CORS_WORKER}/?${process.env.NEXT_PUBLIC_APP_ENDPOINT}?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${searchTerm}`
    );
  }, [searchTerm]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Juegos</h1>
      <Form setSearchTerm={setSearchTerm} />
      {status === "pending" && <Loading />}
      {data && status === "success" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.results.map((element) => {
            return (
              <div key={element.id}>
                <Link
                  className="cursor-pointer bg-slate-200 rounded-md p-4 w-full h-full block"
                  href={`/game/${element.id}`}
                >
                  {element.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {data?.results.length === 0 && status !== "pending" && (
        <p>Sin resultados</p>
      )}
      {error && <p>Hubo un error</p>}
    </main>
  );
}
