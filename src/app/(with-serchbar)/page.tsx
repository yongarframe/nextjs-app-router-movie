import SkeletonMovieItem from "@/components/skeletomMovie-item";
import style from "./page.module.css";
import MovieItem from "@/components/movie-Item";
import { MovieData } from "@/type";
import { delay } from "@/util/delat";
import { Suspense } from "react";

async function AllMovies() {
  await delay(2000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {}
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const allMovies: MovieData[] = await res.json();

  return (
    <div className={style.allMovie}>
      {allMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovies() {
  await delay(2000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const recoMovies: MovieData[] = await res.json();

  return (
    <div className={style.suggestion}>
      {recoMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 영화</h3>
        <Suspense
          fallback={
            <div className={style.suggestion}>
              <SkeletonMovieItem />
              <SkeletonMovieItem />
              <SkeletonMovieItem />
            </div>
          }
        >
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense
          fallback={
            <div className={style.allMovie}>
              <SkeletonMovieItem />
              <SkeletonMovieItem />
              <SkeletonMovieItem />
              <SkeletonMovieItem />
              <SkeletonMovieItem />
            </div>
          }
        >
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
