import { MovieData } from "@/type";
import Link from "next/link";
import style from "./movie-item.module.css";
import Image from "next/image";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <Image
        src={posterImgUrl}
        width={200}
        height={250}
        alt={`영화 ${title}의 포스트 이미지`}
      />
    </Link>
  );
}
