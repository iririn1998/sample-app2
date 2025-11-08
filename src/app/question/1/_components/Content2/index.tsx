import { Button } from "@/components/Button";
import type { FC } from "react";

type Content2Props = {
    description?: string;
}

export const Content2: FC<Content2Props> = ({ description }) => {
    let step = 0;

    console.log('render Content2');

    return (
        <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-purple-200 dark:border-purple-700">
                <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">
                    Content2
                </h2>
                <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">現在のステップ</p>
                    <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                        {step}
                    </p>
                </div>
                <Button 
                    onClick={() => {
                        step = step + 1;
                        console.log('step', step);
                    }} 
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
