import { ReviewData } from "@/type";
import style from "./review-items.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";

export default function ReviewItems({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  const date = new Date(createdAt);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1);
  const d = String(date.getDate());
  return (
    <div className={style.container}>
      <div className={style.author_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>{`${y}. ${m}. ${d}.일 작성됨`}</div>
      </div>
      <div className={style.content}>{content}</div>
      <div className={style.delete_btn}>
        <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
