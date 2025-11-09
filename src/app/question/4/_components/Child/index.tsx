import { Button } from "@/components/Button";
import { type FC, useState } from "react";

type ChildProps = {
  isFancy?: boolean;
}

export const Child: FC<ChildProps> = ({ isFancy }) => {
  console.log("render Child");

  const [step, setStep] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className={`text-2xl font-bold ${isFancy ? "text-red-500" : "text-gray-800 dark:text-gray-100"} mb-4`}>
        Child {step}
      </h2>
      <Button onClick={() => setStep(step + 1)}>+1</Button>
    </div>
  );
};
