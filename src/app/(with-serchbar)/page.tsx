import style from "./page.module.css";
import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-Item";
import { MovieData } from "@/type";

async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    return <div>오루가 발생했습니다 ...</div>;
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 30 } }
  );
  if (!res.ok) {
    return <div>오루가 발생했습니다 ...</div>;
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

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 영화</h3>
        <RecoMovies />
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <AllMovies />
      </section>
    </div>
  );
}
