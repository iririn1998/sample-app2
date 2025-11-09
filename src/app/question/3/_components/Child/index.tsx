import { Button } from "@/components/Button";
import { type FC, useRef, useState } from "react";

type ChildProps = {
  isFancy?: boolean;
}

export const Child: FC<ChildProps> = ({ isFancy }) => {
  const firstRender = useRef<boolean>(true);

  if (firstRender.current) {
    const now = performance.now();
    while (performance.now() - now < 1000) {
      // Artificial delay -- do nothing for 1000ms
    }
    firstRender.current = false;
    console.log("mount Child");
  }

  const [step, setStep] = useState<number>(0);

  console.log("render Child");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Child {step}
      </h2>
      <Button onClick={() => setStep((prev) => prev + 1)}>+1</Button>
    </div>
  );
};
