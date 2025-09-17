import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <header>
      <h1>Header</h1>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <SearchBar />
    </header>
  );
}