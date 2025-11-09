"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import { Content } from "./_components/Content";

export default function Page() {
  const [_, setStep] = useState<number>(0);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          問題 2 memo
        </h1>
        <Content />
        <Button onClick={() => setStep((prev) => prev + 1)} className="mt-4">
          再レンダリング
        </Button>
      </main>
    </div>
  );
}
