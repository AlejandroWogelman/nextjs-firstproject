import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-slate-400 flex mb-3 p-2 justify-evenly font-bold text-slate-900">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
