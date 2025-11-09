'use client';

import { Content } from "./_components/Content";
import { Content2 } from "./_components/Content2";

export default function Question4Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 flex flex-col gap-[16px]">
          問題 4
        </h1>
        <div className="flex flex-col gap-[16px] w-full">
          <Content />
          <Content2 />
        </div>
      </main>
    </div>
  );
}
