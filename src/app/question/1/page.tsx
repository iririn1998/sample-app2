"use client";

import { Content1 } from "./_components/Content1";
import { Content2 } from "./_components/Content2";
import { Content3 } from "./_components/Content3";
import { Content4 } from "./_components/Content4";

export default function Question1Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-[20px]">
          問題 1
        </h1>
        <div className="flex gap-[16px]">
          <Content1 description="useStateで状態管理" />
          <Content2 description="letで状態管理" />
          <Content3 description="useRefで状態管理" />
          <Content4 description="useStateで状態管理&表示なし" />
        </div>
      </main>
    </div>
  );
}
