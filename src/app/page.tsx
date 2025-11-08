import Link from "next/link";

export default function Home() {
  const questionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="mb-8 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          問題一覧
        </h1>
        <ul className="flex flex-col gap-4">
          {questionNumbers.map((number) => (
            <li key={number}>
              <Link
                href={`/question/${number}`}
                className="text-lg font-medium text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
              >
                問題 {number}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
