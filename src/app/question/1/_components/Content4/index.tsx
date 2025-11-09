import { Button } from "@/components/Button";
import { type FC, memo, useState } from "react";

type Content4Props = {
  description?: string;
};

export const Content4: FC<Content4Props> = memo(({ description }) => {
  const [_, setStep] = useState<number>(0);

  console.log("render Content4");

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-green-200 dark:border-green-700">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
          Content4
        </h2>
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            現在のステップ
          </p>
          <p className="text-4xl font-bold text-green-600 dark:text-green-400">
            0
          </p>
        </div>
        <Button
          onClick={() => setStep((prev) => prev + 1)}
          type="button"
          className="w-full"
        >
          +1
        </Button>
      </div>
      {description && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
});
