"use server";

import { delay } from "@/util/delat";
import { revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
  // const movieId = (await params).id;
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author)
    return { status: false, error: "리뷰 내용과 작성자를 입력해 주세요" };

  console.log(movieId, content, author);

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ movieId, content, author }),
      }
    );
    if (!response.ok) {
      return {
        status: "error",
        error: `에러: ${response.statusText}`,
      };
    }
    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      statue: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
}
