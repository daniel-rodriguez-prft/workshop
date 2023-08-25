import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import useGameApi from "../hooks/useGameApi";
import Slider from "./carousel";
import Form from "./form";

export function Game() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useGameApi(searchTerm);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Juegos</h1>
      <Form setSearchTerm={setSearchTerm} />
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.map((element) => {
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
      {/* {data && (
        <div>
          {gameIndex}
          <h2>{data[gameIndex].name}</h2>
          <Image
            src={
              data[gameIndex]?.background_image ??
              "https://placehold.co/600x400/jpg?text=No+image"
            }
            alt='placeholder'
            width='640'
            height='360'
          />
          <h3>Plataformas</h3>
          <ul>
            {data[gameIndex].platforms.map(el => (
              <li key={el.platform.name}>{el.platform.name}</li>
            ))}
          </ul>
          <h3>Fecha de lanzamiento</h3>
          <p>{data[gameIndex].released}</p>
          <h3>Puntaje promedio de Metacritic</h3>
          <p>{data[gameIndex].metacritic}</p>
          <h3>Géneros</h3>
          <ul>
            {data[gameIndex].genres.map(el => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ul>
          <Slider images={data[gameIndex].short_screenshots} />
        </div>
      )} */}
    </main>
  );
}
