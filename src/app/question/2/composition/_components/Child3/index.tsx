import type { FC } from "react";

export const Child3: FC = () => {
  const now = performance.now();
  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 1000ms
  }

  console.log("render Child3");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Child3
      </h2>
    </div>
  );
};
