import { notFound } from "next/navigation";
import style from "./page.module.css";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
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
    <div className={style.container}>
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
    </div>
  );
}
