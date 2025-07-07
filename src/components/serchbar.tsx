"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "@/components/searchbar.module.css";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  };
  return (
    <div className={style.searchbar_container}>
      <input
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        value={search}
        placeholder="검색어를 입력하세요 ..."
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
