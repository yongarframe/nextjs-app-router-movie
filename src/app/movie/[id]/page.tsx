import { notFound } from "next/navigation";
import style from "./page.module.css";
import { ReviewData } from "@/type";
import ReviewItems from "@/components/review-items";
import ReviewEditor from "@/components/review-editor";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${(await params).id}`
  );

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }

  const movie = await res.json();

  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.genres}>
          {releaseDate} / {genres} / {runtime}
        </div>
        <div className={style.company}>{company}</div>
        <h2 className={style.subTitle}>{subTitle}</h2>
        <div className={style.description}>{description}</div>
      </div>
    </section>
  );
}

async function RevewList({ params }: { params: Promise<{ id: string }> }) {
  const { id: movieId } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
    { next: { tags: [`review-${movieId}`] } }
  );

  if (!response.ok) {
    throw new Error(`Reviw fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItems key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className={style.container}>
      <MovieDetail params={Promise.resolve(params)} />
      <ReviewEditor params={Promise.resolve(params)} />
      <RevewList params={Promise.resolve(params)} />
    </div>
  );
}
