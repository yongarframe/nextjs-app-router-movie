import MovieItem from "@/components/movie-Item";
import movies from "@/mock/movies.json";
import style from "./page.module.css";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { MovieData } from "@/type";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    return <div>오류가 발생했습니다 ....</div>;
  }

  const movies: MovieData[] = await res.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
