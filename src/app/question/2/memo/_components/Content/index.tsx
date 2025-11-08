import { Button } from "@/components/Button";
import { type FC, useState } from "react";
import { Child2 } from "../Child2";

export const Content: FC = () => {
    const [step, setStep] = useState<number>(0);

    console.log('render Content');
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 w-full flex flex-col gap-[32px]">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Content memo {step}回目
            </h2>
            <div className="flex flex-col gap-[8px]">
                <Child2 />
            </div>
            <Button onClick={() => setStep((prev) => prev + 1)}>再レンダリング</Button>
        </div>
    )
}
