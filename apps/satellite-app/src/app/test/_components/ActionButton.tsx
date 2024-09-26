'use client';

import { useState } from 'react';

type ActionButtonProps<T> = {
  label: string;
  action: () => Promise<T>;
};

export const ActionButton = <T,>(props: ActionButtonProps<T>) => {
  const [response, setResponse] = useState<T | null>(null);

  return (
    <>
      <button
        onClick={async () => {
          const resp = await props.action();
          setResponse(resp);
          console.log(resp);
        }}
        className={'bg-gray-500 text-white p-2 rounded-md'}
      >
        {props.label}
      </button>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <span>Nothing fetched</span>
      )}
    </>
  );
};
