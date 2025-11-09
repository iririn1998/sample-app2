"use client";

import Link from "next/link";
import { Content } from "./_components/Content";

export default function Question2Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          問題 2
        </h1>
        <Link
          href="/question/2/memo"
          className="mt-4 text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          memo ページへ
        </Link>
        <Link
          href="/question/2/composition"
          className="mt-4 text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          composition ページへ
        </Link>
        <Content />
      </main>
    </div>
  );
}
