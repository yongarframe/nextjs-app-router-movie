"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
