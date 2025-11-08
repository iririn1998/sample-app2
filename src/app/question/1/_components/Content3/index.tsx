import { Button } from "@/components/Button";
import { type FC, useRef } from "react";

type Content3Props = {
    description?: string;
}

export const Content3: FC<Content3Props> = ({ description }) => {
    const stepRef = useRef<number>(0);

    console.log('render Content3');

    const handleIncrement = () => {
        stepRef.current = stepRef.current + 1;
        console.log('stepRef.current', stepRef.current);
    };

    return (
        <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-orange-200 dark:border-orange-700">
                <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                    Content3
                </h2>
                <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">現在のステップ</p>
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                        {stepRef.current}
                    </p>
                </div>
                <Button 
                    onClick={handleIncrement} 
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
