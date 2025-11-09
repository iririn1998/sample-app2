import { type FC, useState } from "react";
import { Child } from "../Child";
import { Child2 } from "../Child2";

export const Content: FC = () => {
  console.log("render Content");

  const [isFancy, setIsFancy] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 w-full flex flex-col gap-[32px]">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Content</h1>
      {/* {isFancy ? <Child isFancy={true} /> : <Child isFancy={false} />} */}
      {isFancy ? <Child isFancy={true} /> : <Child2 isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
};