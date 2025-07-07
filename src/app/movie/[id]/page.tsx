import style from "./page.module.css";

const movieData = {
  id: 3,
  title: "아이유 콘서트 : 더 위닝",
  releaseDate: "2025-01-24",
  company: "CGV ICECON, CJ 4DPLEX",
  genres: ["공연실황"],
  subTitle: "최초의 아이콘 아이유, 100번째 콘서트로 완성된 찬란한 기록",
  description:
    "최초의 아이콘 아이유, 100번째 콘서트로 완성된 찬란한 기록. 'Love wins all', '홀씨', 'Shopper', 'Celebrity', 'Last Fantasy' 등 수많은 명곡으로 서울월드컵경기장을 가득 채운 아이유와 유애나의 뜨거운 에너지와 함성. 상암 하늘을 수놓은 환상적인 드론쇼까지! 승리를 위해 달려온 여정의 마지막 챕터가 지금 스크린에서 펼쳐진다!",
  runtime: 124,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250108_174%2F1736328720692tngqd_JPEG%2Fmovie_image.jpg",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
  } = movieData;

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
