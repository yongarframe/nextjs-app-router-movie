import { ReactNode } from "react";
import Searchbar from "@/components/serchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
