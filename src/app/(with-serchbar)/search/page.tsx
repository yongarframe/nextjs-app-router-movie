import MovieItem from "@/components/movie-Item";
import style from "./page.module.css";
import { MovieData } from "@/type";
import { delay } from "@/util/delat";
import { Suspense } from "react";
import SkeletonMovieItem from "@/components/skeletomMovie-item";

async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await delay(1500);
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

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense
      key={q}
      fallback={
        <div className={style.container}>
          <SkeletonMovieItem />
          <SkeletonMovieItem />
          <SkeletonMovieItem />
        </div>
      }
    >
      <SearchResult searchParams={Promise.resolve(searchParams)} />
    </Suspense>
  );
}
