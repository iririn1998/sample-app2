import { Button } from "@/components/Button";
import { type FC, useState } from "react";

type Content1Props = {
    description?: string;
}

export const Content1: FC<Content1Props> = ({ description }) => {
    const [step, setStep] = useState<number>(0);

    console.log('render Content1');

    return (
        <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Content1
                </h2>
                <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">現在のステップ</p>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        {step}
                    </p>
                </div>
                <Button 
                    onClick={() => setStep(step + 1)} 
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
    )
}
