import style from "./page.module.css";
import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-Item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 영화</h3>
        <div className={style.suggestion}>
          {movies.map((movie, index) => {
            if (index < 3) return <MovieItem key={movie.id} {...movie} />;
          })}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMovie}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
